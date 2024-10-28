import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { KanbanCardService } from './kanban-card.service';
import { KanbanCard } from './entities/kanban-card.entity';
import { CreateKanbanCardInput } from './dto/create-kanban-card.input';
import { UpdateKanbanCardInput } from './dto/update-kanban-card.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => KanbanCard)
export class KanbanCardResolver {
  constructor(private readonly kanbanCardService: KanbanCardService) { }

  @Mutation(() => KanbanCard)
  async createKanbanCard(@Args('createKanbanCardInput') createKanbanCardInput: CreateKanbanCardInput) {
    const newCard = await this.kanbanCardService.create(createKanbanCardInput);
    await pubSub.publish('kanbanCardCreate', { kanbanCardCreate: newCard });
    return newCard;
  }

  @Subscription(() => KanbanCard)
  kanbanCardCreate() {
    return pubSub.asyncIterator('kanbanCardCreate');
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
  async updateKanbanCard(@Args('updateKanbanCardInput') updateKanbanCardInput: UpdateKanbanCardInput) {
    const newCard = await this.kanbanCardService.update(updateKanbanCardInput.id, updateKanbanCardInput);
    await pubSub.publish('kanbanCardUpdated', { kanbanCardUpdated: newCard });
    return newCard;
  }

  @Subscription(() => KanbanCard, {
    filter: (payload, variables) => {
      if (!payload || !payload.kanbanCardUpdated) {
        console.error('Payload structure is invalid:', payload);
        return false;
      }
      return payload.kanbanCardUpdated.columnId === variables.columnId
    }
  })
  kanbanCardUpdated(@Args('columnId', { type: () => Int }) columnId: number) {
    return pubSub.asyncIterator('kanbanCardUpdated');
  }

  @Mutation(() => KanbanCard)
  removeKanbanCard(@Args('id', { type: () => Int }) id: number) {
    return this.kanbanCardService.remove(id);
  }
}
