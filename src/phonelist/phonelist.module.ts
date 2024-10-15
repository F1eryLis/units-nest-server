import { Module } from '@nestjs/common';
import { PhonelistService } from './phonelist.service';
import { PhonelistResolver } from './phonelist.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PhonelistResolver, PhonelistService, PrismaService],
})
export class PhonelistModule {}
