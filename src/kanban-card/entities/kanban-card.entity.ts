import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class KanbanCard {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  companyName: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  comment: string;

  @Field(() => String)
  task: string;

  @Field(() => Date)
  dateTime: Date;

  @Field(() => Int)
  columnId: number;
}
