import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';
import { PhoneList } from 'src/phonelist/entities/phonelist.entity';
import { SoundFile } from 'src/soundfile/entities/soundfile.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  fullName: string;

  @Field({ nullable: true })
  picture?: string;

  @Field(() => [Company], { nullable: true })
  companies?: Company[];

  @Field(() => [PhoneList], { nullable: true })
  phoneLists?: PhoneList[];

  @Field(() => [SoundFile], { nullable: true })
  soundFiles?: SoundFile[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
