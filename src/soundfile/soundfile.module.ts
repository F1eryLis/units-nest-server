import { Module } from '@nestjs/common';
import { SoundfileService } from './soundfile.service';
import { SoundfileResolver } from './soundfile.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SoundfileResolver, SoundfileService, PrismaService],
})
export class SoundfileModule {}
