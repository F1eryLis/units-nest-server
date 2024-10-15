import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhonelistService } from './phonelist.service';
import { PhoneList } from './entities/phonelist.entity';
import { CreatePhonelistInput } from './dto/create-phonelist.input';
import { UpdatePhonelistInput } from './dto/update-phonelist.input';

@Resolver(() => PhoneList)
export class PhonelistResolver {
  constructor(private readonly phonelistService: PhonelistService) {}

  @Mutation(() => PhoneList)
  createPhonelist(@Args('createPhonelistInput') createPhonelistInput: CreatePhonelistInput) {
    return this.phonelistService.create(createPhonelistInput);
  }

  @Query(() => [PhoneList], { name: 'phonelists' })
  findAll() {
    return this.phonelistService.findAll();
  }

  @Query(() => PhoneList, { name: 'phonelist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.phonelistService.findOne(id);
  }

  @Mutation(() => PhoneList)
  updatePhonelist(@Args('updatePhonelistInput') updatePhonelistInput: UpdatePhonelistInput) {
    return this.phonelistService.update(updatePhonelistInput.id, updatePhonelistInput);
  }

  @Mutation(() => PhoneList)
  removePhonelist(@Args('id', { type: () => Int }) id: number) {
    return this.phonelistService.remove(id);
  }
}
