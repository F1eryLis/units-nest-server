import { Test, TestingModule } from '@nestjs/testing';
import { KanbanCardResolver } from './kanban-card.resolver';
import { KanbanCardService } from './kanban-card.service';

describe('KanbanCardResolver', () => {
  let resolver: KanbanCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanCardResolver, KanbanCardService],
    }).compile();

    resolver = module.get<KanbanCardResolver>(KanbanCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
