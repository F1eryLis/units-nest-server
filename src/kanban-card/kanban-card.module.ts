import { Module } from '@nestjs/common';
import { KanbanCardService } from './kanban-card.service';
import { KanbanCardResolver } from './kanban-card.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [KanbanCardResolver, KanbanCardService, PrismaService],
})
export class KanbanCardModule {}
