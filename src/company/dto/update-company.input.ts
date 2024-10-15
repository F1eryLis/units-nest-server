import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  companyLimit?: number;

  @Field(() => Int, { nullable: true })
  dayLimit?: number;

  @Field(() => Int, { nullable: true })
  status?: number;

  @Field({ nullable: true })
  startTime?: Date;

  @Field({ nullable: true })
  endTime?: Date;

  @Field(() => Int, { nullable: true })
  days?: number; //TODO: On Postgresql make it JSON type

  @Field(() => Int, { nullable: true })
  reaction?: number; //TODO: On Postgresql make it JSON type

  @Field(() => Int, { nullable: true })
  soundFileId?: number;

  @Field(() => Int, { nullable: true })
  phonesId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;
}
