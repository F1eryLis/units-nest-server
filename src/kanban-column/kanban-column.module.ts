import { Module } from '@nestjs/common';
import { KanbanColumnService } from './kanban-column.service';
import { KanbanColumnResolver } from './kanban-column.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { KanbanCardService } from 'src/kanban-card/kanban-card.service';

@Module({
  providers: [KanbanColumnResolver, KanbanColumnService, PrismaService, KanbanCardService],
})
export class KanbanColumnModule {}
