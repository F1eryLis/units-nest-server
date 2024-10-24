import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KanbanCardService } from './kanban-card.service';
import { KanbanCard } from './entities/kanban-card.entity';
import { CreateKanbanCardInput } from './dto/create-kanban-card.input';
import { UpdateKanbanCardInput } from './dto/update-kanban-card.input';

@Resolver(() => KanbanCard)
export class KanbanCardResolver {
  constructor(private readonly kanbanCardService: KanbanCardService) {}

  @Mutation(() => KanbanCard)
  createKanbanCard(@Args('createKanbanCardInput') createKanbanCardInput: CreateKanbanCardInput) {
    return this.kanbanCardService.create(createKanbanCardInput);
  }

  @Query(() => [KanbanCard], { name: 'kanbanCards' })
  findAll() {
    return this.kanbanCardService.findAll();
  }

  @Query(() => KanbanCard, { name: 'kanbanCard' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kanbanCardService.findOne(id);
  }

  @Mutation(() => KanbanCard)
  updateKanbanCard(@Args('updateKanbanCardInput') updateKanbanCardInput: UpdateKanbanCardInput) {
    return this.kanbanCardService.update(updateKanbanCardInput.id, updateKanbanCardInput);
  }

  @Mutation(() => KanbanCard)
  removeKanbanCard(@Args('id', { type: () => Int }) id: number) {
    return this.kanbanCardService.remove(id);
  }
}
