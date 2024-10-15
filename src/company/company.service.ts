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
    });
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.company.findUnique({ where: { id }, });
  }

  async update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return await this.prisma.company.update({
      where: { id },
      data: {
        ...updateCompanyInput
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.company.delete({ where: { id } });
  }
}
