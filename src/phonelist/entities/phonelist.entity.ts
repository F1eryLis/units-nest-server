import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';

@ObjectType()
export class PhoneList {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Int])
  phones: number[]; //TODO: Postgresql JSON

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}