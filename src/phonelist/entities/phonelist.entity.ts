import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PhoneList {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [String])
  phones: string[]; //TODO: Postgresql JSON

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}