import { Injectable } from '@nestjs/common';
import { CreateSoundfileInput } from './dto/create-soundfile.input';
import { UpdateSoundfileInput } from './dto/update-soundfile.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SoundfileService {
  constructor(private prisma: PrismaService) { }

  async create(createSoundfileInput: CreateSoundfileInput) {
    return await this.prisma.soundFile.create({
      data: {
        ...createSoundfileInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.soundFile.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.soundFile.findUnique({ where: { id } });
  }

  async update(id: number, updateSoundfileInput: UpdateSoundfileInput) {
    return await this.prisma.soundFile.update({
      where: { id },
      data: {
        ...updateSoundfileInput,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.soundFile.delete({ where: { id } });
  }
}
