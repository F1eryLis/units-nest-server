import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';

@ObjectType()
export class SoundFile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  filePath: string;

  @Field(() => [Company], { nullable: true })
  companies?: Company[];

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
