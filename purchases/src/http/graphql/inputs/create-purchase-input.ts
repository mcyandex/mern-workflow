import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createPurchaseInput {
  @Field()
  productId: string;
}
