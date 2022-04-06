import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from 'src/services/products.service';
import { createProductInput } from '../inputs/create-product-input';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Product } from '../models/product';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: createProductInput) {
    return this.productsService.createProduct(data);
  }
}
