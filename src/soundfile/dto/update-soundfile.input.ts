import { CreateSoundfileInput } from './create-soundfile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSoundfileInput extends PartialType(CreateSoundfileInput) {
  @Field(() => Int)
  id: number;
}
