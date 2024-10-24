import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { KanbanColumnService } from './kanban-column.service';
import { KanbanColumn } from './entities/kanban-column.entity';
import { CreateKanbanColumnInput } from './dto/create-kanban-column.input';
import { UpdateKanbanColumnInput } from './dto/update-kanban-column.input';
import { KanbanCardService } from 'src/kanban-card/kanban-card.service';
import { KanbanCard } from 'src/kanban-card/entities/kanban-card.entity';

@Resolver(() => KanbanColumn)
export class KanbanColumnResolver {
  constructor(private readonly kanbanColumnService: KanbanColumnService) { }

  @Mutation(() => KanbanColumn)
  createKanbanColumn(@Args('createKanbanColumnInput') createKanbanColumnInput: CreateKanbanColumnInput) {
    return this.kanbanColumnService.create(createKanbanColumnInput);
  }

  @Query(() => [KanbanColumn], { name: 'kanbanColumns' })
  findAll() {
    return this.kanbanColumnService.findAll();
  }

  @Query(() => KanbanColumn, { name: 'kanbanColumn' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kanbanColumnService.findOne(id);
  }

  @Mutation(() => KanbanColumn)
  updateKanbanColumn(@Args('updateKanbanColumnInput') updateKanbanColumnInput: UpdateKanbanColumnInput) {
    return this.kanbanColumnService.update(updateKanbanColumnInput.id, updateKanbanColumnInput);
  }

  @Mutation(() => KanbanColumn)
  removeKanbanColumn(@Args('id', { type: () => Int }) id: number) {
    return this.kanbanColumnService.remove(id);
  }

  @ResolveField('kanbanCards', () => [KanbanCard])
  kanbanCards(@Parent() column: KanbanColumn) {
    return this.kanbanColumnService.getKanbanCardsById(column.id);
  }
}
