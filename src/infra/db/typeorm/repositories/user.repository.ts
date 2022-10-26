import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from 'src/domain/db/user/user-repository.interface';
import { CreateUserDTO } from 'src/presentation/user/dtos/create-user.dto';
import { UpdateUserDTO } from 'src/presentation/user/dtos/update-user.dto';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entities/user/user.entity';

export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepo: Repository<UserEntity>,
  ) {}
  async insert(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const userCreated = Object.assign({} as CreateUserDTO, createUserDTO);
    return await this.userEntityRepo.save(userCreated);
  }
  async find(): Promise<UserEntity[]> {
    return await this.userEntityRepo.find();
  }
  async findById(id: number): Promise<UserEntity> {
    return await this.userEntityRepo.findOneBy({ id });
  }
  async updateUser(
    id: number,
    updateUserDTO: UpdateUserDTO,
  ): Promise<UpdateResult> {
    return await this.userEntityRepo.update(id, { ...updateUserDTO });
  }
  async deleteById(id: number): Promise<void> {
    await this.userEntityRepo.delete({ id });
  }
}
