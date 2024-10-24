import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateKanbanCardInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  companyName?: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  comment?: string;

  @Field(() => String, { nullable: true })
  task?: string;

  @Field(() => Date, { nullable: true })
  dateTime?: Date;

  @Field(() => Int)
  columnId: number;
}
