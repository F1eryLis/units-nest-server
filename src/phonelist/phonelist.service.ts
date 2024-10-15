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
        name: createPhonelistInput.name,
        phones: createPhonelistInput.phones,
        companies: {
          connect: createPhonelistInput.companies.map(company => ({ id: company.id }))
        },
        user: {
          connect: { id: createPhonelistInput.userId }
        }
      },
      include: {
        companies: true,
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.phoneList.findMany({
      include: {
        companies: true,
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.phoneList.findUnique({
      where: { id },
      include: {
        companies: true,
        user: true,
      },
    });
  }

  update(id: number, updatePhonelistInput: UpdatePhonelistInput) {
    return this.prisma.phoneList.update({
      where: { id },
      data: {
        name: updatePhonelistInput.name,
        phones: updatePhonelistInput.phones,
        companies: updatePhonelistInput.companies ? {
          connect: updatePhonelistInput.companies.map(company => ({ id: company.id }))
        } : undefined,
        user: updatePhonelistInput.userId ? {
          connect: { id: updatePhonelistInput.userId }
        } : undefined,
      },
      include: {
        companies: true,
        user: true,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} phonelist`;
  }
}
