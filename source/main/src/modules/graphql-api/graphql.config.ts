import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginUsageReporting } from '@apollo/server/plugin/usageReporting';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { join } from 'path';

// Configuration factory for Apollo GraphQL
export const createApolloConfig = (): ApolloDriverConfig => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    // Base configuration
    autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    sortSchema: true,
    playground: false, // Use Apollo Sandbox instead of playground

    // Performance settings
    cache: 'bounded',
    csrfPrevention: true,

    // Plugins
    plugins: [
      // Interactive GraphQL UI
      ApolloServerPluginLandingPageLocalDefault({
        embed: true,
        includeCookies: true,
      }),

      // Cache control
      ApolloServerPluginCacheControl({
        defaultMaxAge: 5, // 5 seconds
        calculateHttpHeaders: true,
      }),

      // Usage reporting - only in production
      ...(isProduction
        ? [
            ApolloServerPluginUsageReporting({
              sendVariableValues: { all: true },
              sendHeaders: { all: true },
              generateClientInfo: ({ request }) => {
                const headers = request.http?.headers;
                return {
                  clientName:
                    headers?.get('apollo-client-name') || 'Unknown Client',
                  clientVersion:
                    headers?.get('apollo-client-version') || 'Unknown Version',
                };
              },
            }),
          ]
        : []),
    ],

    // Context function for Fastify
    context: ({ request }) => ({
      request,
    }),

    // Security settings
    introspection: !isProduction, // Disable in production for security

    // Error handling
    formatError: (error) => {
      // Log errors to your monitoring system
      console.error('GraphQL Error:', error);

      // Define a type for the exception to access stacktrace safely
      interface ErrorWithException {
        exception?: {
          stacktrace?: string[];
        };
      }

      // Return sanitized errors to the client
      return {
        message: error.message,
        locations: error.locations,
        path: error.path,
        extensions: {
          code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
          // Only include stack traces in development
          ...(isProduction
            ? {}
            : {
                stacktrace: (error.extensions as ErrorWithException)?.exception
                  ?.stacktrace,
              }),
        },
      };
    },

    // Subscription options (if needed)
    subscriptions: {
      'graphql-ws': true,
    },
  };
};
