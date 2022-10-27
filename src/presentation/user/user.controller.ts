import { Body, Controller, Post } from '@nestjs/common';
import { AddUserUseCase } from 'src/usecases/user/add-user.usecase';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly addUserUseCase: AddUserUseCase) {}
  @Post()
  async create(@Body() createUserDTO: CreateUserDTO) {
    return await this.addUserUseCase.execute(createUserDTO);
  }
}
