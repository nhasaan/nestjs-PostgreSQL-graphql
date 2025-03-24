import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlApiModule } from './modules/graphql-api/graphql-api.module';
import { SharedModule } from '@shared/shared.module';
import { createApolloConfig } from './modules/graphql-api/graphql.config';

@Module({
  imports: [
    // Use the factory function to create Apollo config with driver
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      ...createApolloConfig(),
    }),
    GraphqlApiModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
