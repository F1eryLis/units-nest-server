import { CreatePhonelistInput } from './create-phonelist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePhonelistInput extends PartialType(CreatePhonelistInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [String], { nullable: "itemsAndList" })
  phones?: string[];

  @Field(() => Int, { nullable: true })
  userId?: number;
}
