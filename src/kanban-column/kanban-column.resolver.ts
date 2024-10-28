import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { KanbanColumnService } from './kanban-column.service';
import { KanbanColumn } from './entities/kanban-column.entity';
import { CreateKanbanColumnInput } from './dto/create-kanban-column.input';
import { UpdateKanbanColumnInput } from './dto/update-kanban-column.input';
import { KanbanCardService } from 'src/kanban-card/kanban-card.service';
import { KanbanCard } from 'src/kanban-card/entities/kanban-card.entity';
import { PubSub } from 'graphql-subscriptions';
import { UpdateKanbanCardInput } from 'src/kanban-card/dto/update-kanban-card.input';

const pubSub = new PubSub();

@Resolver(() => KanbanColumn)
export class KanbanColumnResolver {
  constructor(
    private readonly kanbanColumnService: KanbanColumnService,
    private readonly kanbanCardService: KanbanCardService,
  ) { }

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

  // @Subscription(() => KanbanCard)
  // kanbanCardAdded() {
  //   console.log('yes');
    
  //   return pubSub.asyncIterator('kanbanCardAdded');
  // }

  // @Mutation(() => KanbanCard)
  // async addCard(@Args('updateKanbanCardInput') updateKanbanCardInput: UpdateKanbanCardInput) {
  //   const newCard = this.kanbanCardService.update(updateKanbanCardInput.id, updateKanbanCardInput);
  //   pubSub.publish('kanbanCardAdded', { kanbanCardAdded: newCard });
  //   return newCard;
  // }
}
