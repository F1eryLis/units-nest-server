import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Company } from 'src/company/entities/company.entity';
import { PhoneList } from 'src/phonelist/entities/phonelist.entity';
import { SoundFile } from 'src/soundfile/entities/soundfile.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  @ResolveField('companies', () => [Company])
  companies(@Parent() user: User) {
    return this.userService.getUserCompanies(user.id);
  }

  @ResolveField('phoneLists', () => [PhoneList])
  phoneLists(@Parent() user: User) {
    return this.userService.getUserPhoneLists(user.id);
  }

  @ResolveField('soundFiles', () => [SoundFile])
  soundFiles(@Parent() user: User) {
    return this.userService.getUserSoundFiles(user.id);
  }

  @ResolveField('soundFile', () => SoundFile)
  async soundFile(@Parent() user: User, @Args('id', { type: () => Int }) soundFileId: number) {
    return this.userService.getUserSoundFiles(user.id).then(soundFiles => 
      soundFiles.find(soundFile => soundFile.id === soundFileId)
    );
  }
}
