import { Injectable } from '@nestjs/common';
import { CreateKanbanCardInput } from './dto/create-kanban-card.input';
import { UpdateKanbanCardInput } from './dto/update-kanban-card.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KanbanCardService {
  constructor(private prisma: PrismaService) { }

  async create(createKanbanCardInput: CreateKanbanCardInput) {
    return await this.prisma.kanbanCard.create({
      data: {
        ...createKanbanCardInput
      }
    });
  }

  async findAll() {
    return await this.prisma.kanbanCard.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.kanbanCard.findUnique({ where: { id: id } });
  }

  async update(id: number, updateKanbanCardInput: UpdateKanbanCardInput) {
    return await this.prisma.kanbanCard.update({
      where: { id: id },
      data: {
        ...updateKanbanCardInput
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.kanbanCard.delete({ where: { id: id } });
  }
}
