import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
