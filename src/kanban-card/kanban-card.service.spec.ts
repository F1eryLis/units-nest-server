import { Test, TestingModule } from '@nestjs/testing';
import { KanbanCardService } from './kanban-card.service';

describe('KanbanCardService', () => {
  let service: KanbanCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanCardService],
    }).compile();

    service = module.get<KanbanCardService>(KanbanCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
