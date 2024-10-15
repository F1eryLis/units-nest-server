import { Injectable } from '@nestjs/common';
import { CreateSoundfileInput } from './dto/create-soundfile.input';
import { UpdateSoundfileInput } from './dto/update-soundfile.input';

@Injectable()
export class SoundfileService {
  create(createSoundfileInput: CreateSoundfileInput) {
    return 'This action adds a new soundfile';
  }

  findAll() {
    return `This action returns all soundfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soundfile`;
  }

  update(id: number, updateSoundfileInput: UpdateSoundfileInput) {
    return `This action updates a #${id} soundfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} soundfile`;
  }
}
