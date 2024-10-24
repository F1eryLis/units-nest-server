import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class KanbanColumn {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  titleColor: string;
}
