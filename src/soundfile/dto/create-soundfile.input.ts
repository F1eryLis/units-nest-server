import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSoundfileInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
