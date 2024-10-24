import { Module } from '@nestjs/common';
import { KanbanColumnService } from './kanban-column.service';
import { KanbanColumnResolver } from './kanban-column.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [KanbanColumnResolver, KanbanColumnService, PrismaService],
})
export class KanbanColumnModule {}
