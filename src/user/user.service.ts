import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserInput: CreateUserInput) {
    return await this.prisma.user.create({
      data: createUserInput,
      include: {
        companies: true,
        phoneLists: true,
        soundFiles: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        companies: true,
        phoneLists: true,
        soundFiles: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        companies: true,
        phoneLists: true,
        soundFiles: true,
      },
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserInput,
      include: {
        companies: true,
        phoneLists: true,
        soundFiles: true,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
      include: {
        companies: true,
        phoneLists: true,
        soundFiles: true,
      },
    });
  }
}
