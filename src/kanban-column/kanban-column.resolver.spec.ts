import { Test, TestingModule } from '@nestjs/testing';
import { KanbanColumnResolver } from './kanban-column.resolver';
import { KanbanColumnService } from './kanban-column.service';

describe('KanbanColumnResolver', () => {
  let resolver: KanbanColumnResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanColumnResolver, KanbanColumnService],
    }).compile();

    resolver = module.get<KanbanColumnResolver>(KanbanColumnResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
