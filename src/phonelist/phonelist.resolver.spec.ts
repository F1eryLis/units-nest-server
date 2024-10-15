import { Test, TestingModule } from '@nestjs/testing';
import { PhonelistResolver } from './phonelist.resolver';
import { PhonelistService } from './phonelist.service';

describe('PhonelistResolver', () => {
  let resolver: PhonelistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonelistResolver, PhonelistService],
    }).compile();

    resolver = module.get<PhonelistResolver>(PhonelistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
