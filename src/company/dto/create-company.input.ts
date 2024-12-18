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

  @Field(() => [Int], { nullable: 'itemsAndList' })
  days: number[]; //TODO: On Postgresql make it JSON type

  @Field(() => [Int], { nullable: 'itemsAndList' })
  reaction: number[]; //TODO: On Postgresql make it JSON type

  @Field(() => Int, { nullable: true })
  soundFileId?: number;

  @Field(() => Int, { nullable: true })
  phonesId?: number;

  @Field(() => Int)
  userId: number;
}
