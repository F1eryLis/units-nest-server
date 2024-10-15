import { InputType, Int, Field } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';

@InputType()
export class CreatePhonelistInput {
  @Field(() => String, { description: 'Name of the phone list' })
  name: string;
  
  @Field(() => Int, { description: 'List of phone numbers' })
  phones: number; // TODO: On Postgresql make it JSON type

  @Field(() => [Company], { nullable: true, description: 'Companies associated with the phone list' })
  companies: Company[];
  
  @Field(() => Int, { description: 'User ID associated with the phone list' })
  userId: number;
}
