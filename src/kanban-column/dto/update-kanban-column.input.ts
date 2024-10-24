import { CreateKanbanColumnInput } from './create-kanban-column.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKanbanColumnInput extends PartialType(CreateKanbanColumnInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  titleColor?: string;
}
