import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import compress from '@fastify/compress';
import cors from '@fastify/cors';
import { Logger } from '@nestjs/common';
import fastifyWebsocket from '@fastify/websocket';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const isProduction = process.env.NODE_ENV === 'production';

  // Create app with Fastify adapter
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: false,
      ignoreTrailingSlash: true,
      maxParamLength: 100,
    })
  );

  // Configure CORS
  const corsOptions = {
    origin: isProduction
      ? process.env.CORS_ALLOWED_ORIGINS?.split(',') || []
      : true,
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
  };

  // Register Fastify plugins
  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        scriptSrc: [`'self'`, `'unsafe-inline'`, `'unsafe-eval'`],
      },
    },
  });
  await app.register(compress);
  await app.register(cors, corsOptions);

  // Register WebSocket support for GraphQL subscriptions
  await app.register(fastifyWebsocket, {
    options: {
      maxPayload: 1048576, // 1MB
    },
  });

  // Start the application
  const port = process.env.PORT || 3100;
  await app.listen(port, '0.0.0.0');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
