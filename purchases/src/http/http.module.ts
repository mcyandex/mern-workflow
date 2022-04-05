import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql'
import path from 'node:path';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsService } from 'src/services/products.service';
import { ProductsResolver } from './graphql/products.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    })],
  providers: [ProductsResolver, ProductsService],
})
export class HttpModule { }
