import { Module } from '@nestjs/common';
import { SoundfileService } from './soundfile.service';
import { SoundfileResolver } from './soundfile.resolver';

@Module({
  providers: [SoundfileResolver, SoundfileService],
})
export class SoundfileModule {}
