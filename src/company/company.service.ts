import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) { }

  async create(createCompanyInput: CreateCompanyInput) {
    return await this.prisma.company.create({
      data: {
        ...createCompanyInput
      },
      include: {
        phoneList: true,
        soundFile: true,
        user: true,
      }
    });
  }

  findAll() {
    return this.prisma.company.findMany({
      include: {
        phoneList: true,
        soundFile: true,
        user: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        phoneList: true,
        soundFile: true,
        user: true,
      }
    });
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return this.prisma.company.update({
      where: { id },
      data: {
        ...updateCompanyInput
      },
      include: {
        phoneList: true,
        soundFile: true,
        user: true,
      }
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({
      where: { id },
      include: {
        phoneList: true,
        soundFile: true,
        user: true,
      }
    });
  }
}
