import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePhonelistInput {
  @Field({ description: 'Name of the phone list' })
  name: string;
  
  @Field(() => [String], { description: 'List of phone numbers' })
  phones: string[]; // Changed to JSON type for PostgreSQL
  
  @Field(() => Int, { description: 'User ID associated with the phone list' })
  userId: number;
}
