import { UserEntity } from 'src/infra/db/typeorm/entities/user/user.entity';
import { CreateUserDTO } from 'src/presentation/user/dtos/create-user.dto';
import { UpdateUserDTO } from 'src/presentation/user/dtos/update-user.dto';
import { UpdateResult } from 'typeorm';

export interface UserRepositoryInterface {
  insert(createUserDTO: CreateUserDTO): Promise<UserEntity>;
  find(): Promise<UserEntity[]>;
  findById(id: number): Promise<UserEntity>;
  updateUser(id: number, updateUserDTO: UpdateUserDTO): Promise<UpdateResult>;
  deleteById(id: number): Promise<void>;
}
