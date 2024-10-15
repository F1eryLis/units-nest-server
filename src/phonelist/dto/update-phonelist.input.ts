import { CreatePhonelistInput } from './create-phonelist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePhonelistInput extends PartialType(CreatePhonelistInput) {
  @Field(() => Int)
  id: number;
}
