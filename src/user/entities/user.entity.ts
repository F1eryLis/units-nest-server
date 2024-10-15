import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  fullName: string;

  @Field({ nullable: true })
  picture?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
