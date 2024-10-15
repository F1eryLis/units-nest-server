import { Test, TestingModule } from '@nestjs/testing';
import { PhonelistService } from './phonelist.service';

describe('PhonelistService', () => {
  let service: PhonelistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonelistService],
    }).compile();

    service = module.get<PhonelistService>(PhonelistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
