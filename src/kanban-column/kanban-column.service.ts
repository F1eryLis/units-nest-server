import { Injectable } from '@nestjs/common';
import { CreateKanbanColumnInput } from './dto/create-kanban-column.input';
import { UpdateKanbanColumnInput } from './dto/update-kanban-column.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KanbanColumnService {
  constructor(private prisma: PrismaService) { }

  async create(createKanbanColumnInput: CreateKanbanColumnInput) {
    return await this.prisma.kanbanColumn.create({
      data: {
        ...createKanbanColumnInput
      },
    });
  }

  async findAll() {
    return await this.prisma.kanbanColumn.findMany();
  }

  async getKanbanCardsById(id: number) {
    return await this.prisma.kanbanCard.findMany({ where: { columnId: id } });
  }

  async findOne(id: number) {
    return await this.prisma.kanbanColumn.findUnique({ where: { id: id } });
  }

  async update(id: number, updateKanbanColumnInput: UpdateKanbanColumnInput) {
    return await this.prisma.kanbanColumn.update({
      where: { id: id },
      data: {
        ...updateKanbanColumnInput
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.kanbanColumn.delete({ where: { id: id } });
  }
}
