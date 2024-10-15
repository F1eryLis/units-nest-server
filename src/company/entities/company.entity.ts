import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;
  
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

  @Field()
  createdAt: Date;

  @Field()
  updatetAt: Date;
}
