import { Company } from 'src/company/entities/company.entity';
import { CreateSoundfileInput } from './create-soundfile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSoundfileInput extends PartialType(CreateSoundfileInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  filePath?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}
