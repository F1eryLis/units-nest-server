import { CreateKanbanCardInput } from './create-kanban-card.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKanbanCardInput extends PartialType(CreateKanbanCardInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  companyName?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => String, { nullable: true })
  comment?: string;

  @Field(() => String, { nullable: true })
  task?: string;

  @Field(() => Date, { nullable: true })
  dateTime?: Date;

  @Field(() => Int, { nullable: true })
  columnId?: number;
}
