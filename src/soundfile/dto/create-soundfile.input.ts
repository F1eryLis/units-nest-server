import { InputType, Int, Field } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';

@InputType()
export class CreateSoundfileInput {

  @Field()
  name: string;

  @Field()
  filePath: string;

  @Field(() => Int)
  userId: number;
}
