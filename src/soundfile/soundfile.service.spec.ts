import { Test, TestingModule } from '@nestjs/testing';
import { SoundfileService } from './soundfile.service';

describe('SoundfileService', () => {
  let service: SoundfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoundfileService],
    }).compile();

    service = module.get<SoundfileService>(SoundfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
