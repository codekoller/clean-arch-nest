import { UserModel } from 'src/infra/database/mongodb/schemas/user.schema';
import { CreateUserDTO } from 'src/presentation/user/dtos/create-user.dto';

export interface UserRepositortyInterface {
  insert(createUserDTO: CreateUserDTO): Promise<UserModel>;
}
