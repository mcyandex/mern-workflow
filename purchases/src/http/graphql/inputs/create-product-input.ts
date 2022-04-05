import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createProductInput {
  @Field()
  title: string;
}