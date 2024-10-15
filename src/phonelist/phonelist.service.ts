import { Injectable } from '@nestjs/common';
import { CreatePhonelistInput } from './dto/create-phonelist.input';
import { UpdatePhonelistInput } from './dto/update-phonelist.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhonelistService {
  constructor(private prisma: PrismaService) { }

  async create(createPhonelistInput: CreatePhonelistInput) {
    return await this.prisma.phoneList.create({
      data: {
        ...createPhonelistInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.phoneList.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.phoneList.findUnique({ where: { id } });
  }

  async update(id: number, updatePhonelistInput: UpdatePhonelistInput) {
    return await this.prisma.phoneList.update({
      where: { id },
      data: {
        ...updatePhonelistInput,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.phoneList.delete({ where: { id } });
  }
}
