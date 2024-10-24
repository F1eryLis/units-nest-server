import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateKanbanColumnInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  titleColor?: string;
}
