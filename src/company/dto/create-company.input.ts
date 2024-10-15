import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string;

  @Field(() => Int)
  companyLimit: number;

  @Field(() => Int)
  dayLimit: number;

  @Field(() => Int)
  status: number;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field(() => Int)
  days: number; //TODO: On Postgresql make it JSON type

  @Field(() => Int)
  reaction: number; //TODO: On Postgresql make it JSON type

  @Field(() => Int)
  soundFileId: number;

  @Field(() => Int)
  phonesId: number;

  @Field(() => Int)
  userId: number;
}
