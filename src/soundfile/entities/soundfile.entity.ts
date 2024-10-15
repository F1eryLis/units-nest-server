import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SoundFile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  filePath: string;

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
