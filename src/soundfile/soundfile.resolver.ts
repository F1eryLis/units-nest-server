import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SoundfileService } from './soundfile.service';
import { SoundFile } from './entities/soundfile.entity';
import { CreateSoundfileInput } from './dto/create-soundfile.input';
import { UpdateSoundfileInput } from './dto/update-soundfile.input';

@Resolver(() => SoundFile)
export class SoundfileResolver {
  constructor(private readonly soundfileService: SoundfileService) {}

  @Mutation(() => SoundFile)
  createSoundfile(@Args('createSoundfileInput') createSoundfileInput: CreateSoundfileInput) {
    return this.soundfileService.create(createSoundfileInput);
  }

  @Query(() => [SoundFile], { name: 'soundfiles' })
  findAll() {
    return this.soundfileService.findAll();
  }

  @Query(() => SoundFile, { name: 'soundfile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.soundfileService.findOne(id);
  }

  @Mutation(() => SoundFile)
  updateSoundfile(@Args('updateSoundfileInput') updateSoundfileInput: UpdateSoundfileInput) {
    return this.soundfileService.update(updateSoundfileInput.id, updateSoundfileInput);
  }

  @Mutation(() => SoundFile)
  removeSoundfile(@Args('id', { type: () => Int }) id: number) {
    return this.soundfileService.remove(id);
  }
}
