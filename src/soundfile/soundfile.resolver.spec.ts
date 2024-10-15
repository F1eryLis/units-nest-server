import { Test, TestingModule } from '@nestjs/testing';
import { SoundfileResolver } from './soundfile.resolver';
import { SoundfileService } from './soundfile.service';

describe('SoundfileResolver', () => {
  let resolver: SoundfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoundfileResolver, SoundfileService],
    }).compile();

    resolver = module.get<SoundfileResolver>(SoundfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
