import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserInput: CreateUserInput) {
    return await this.prisma.user.create({
      data: {
        ...createUserInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async getUserCompanies(userId: number) {
    return await this.prisma.company.findMany({ where: { userId: userId } });
  }

  async getUserPhoneLists(userId: number) {
    return await this.prisma.phoneList.findMany({ where: { userId: userId } });
  }

  async getUserSoundFiles(userId: number) {
    return await this.prisma.soundFile.findMany({ where: { userId: userId } });
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserInput,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
