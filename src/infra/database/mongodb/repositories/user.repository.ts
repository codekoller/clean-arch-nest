import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRepositortyInterface } from 'src/domain/database/user-repository.interface';
import { CreateUserDTO } from 'src/presentation/user/dtos/create-user.dto';
import { UserModel } from '../schemas/user.schema';

export class UserMongodbRepository implements UserRepositortyInterface {
  constructor(
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>,
  ) {}

  async insert(createUserDTO: CreateUserDTO): Promise<UserModel> {
    return await this.userModel.create(createUserDTO);
  }
}
