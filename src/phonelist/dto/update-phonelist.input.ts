import { CreatePhonelistInput } from './create-phonelist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';

@InputType()
export class UpdatePhonelistInput extends PartialType(CreatePhonelistInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [Int], { nullable: true })
  phones?: number[];

  @Field(() => Int, { nullable: true })
  userId?: number;
}
