import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesModule } from './domain/sales/sales.module';
import databaseConfigService from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfigService.getTypeormConfig(),
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
    }),
    SalesModule,
  ],
})
export class AppModule {}
