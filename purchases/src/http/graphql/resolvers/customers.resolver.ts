import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Parent,
  ResolveField,
  ResolveReference,
} from '@nestjs/graphql';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Customer } from '../models/customer';
import { CustomersService } from 'src/services/customers.service';
import { AuthUser, CurrentUser } from '../../auth/current-user';
import { PurchasesService } from 'src/services/purchases.service';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customersService: CustomersService,
    private purchasesService: PurchasesService,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => Customer)
  me(@CurrentUser() user: AuthUser) {
    return this.customersService.getCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchasesService.listAllFromCustomer(customer.id);
  }

  @ResolveReference()
  resolveReference(reference: { authUserId: string }) {
    return this.customersService.getCustomerByAuthUserId(reference.authUserId);
  }
}
