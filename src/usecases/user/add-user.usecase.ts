import { UserRepositortyInterface } from 'src/domain/database/user-repository.interface';
import { UserModel } from 'src/infra/database/mongodb/schemas/user.schema';
import { CreateUserDTO } from 'src/presentation/user/dtos/create-user.dto';

export class AddUserUseCase {
  constructor(private readonly userRepo: UserRepositortyInterface) {}
  async execute(createUserDTO: CreateUserDTO): Promise<UserModel> {
    return await this.userRepo.insert(createUserDTO);
  }
}
