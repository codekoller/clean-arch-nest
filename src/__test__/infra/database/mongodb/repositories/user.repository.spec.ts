import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { UserMongodbRepository } from '../../../../../infra/database/mongodb/repositories/user.repository';
import { UserModel } from '../../../../../infra/database/mongodb/schemas/user.schema';

describe('UserMongodbRepository ', () => {
  let userMongodbRepository: UserMongodbRepository;
  let mockUserModel: Model<UserModel>;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(UserModel.name),
          useValue: Model,
        },
        UserMongodbRepository,
      ],
    }).compile();

    userMongodbRepository = module.get<UserMongodbRepository>(
      UserMongodbRepository,
    );

    mockUserModel = module.get<Model<UserModel>>(getModelToken(UserModel.name));
  });

  it('should be defined accountMongoDbRepository', () => {
    expect(userMongodbRepository).toBeDefined();
  });
  it('should be defined accountModel', () => {
    expect(mockUserModel).toBeDefined();
  });

  it('should be called create with correct params', async () => {
    const createUserDTO = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    const spy = jest.spyOn(mockUserModel, 'create').mockReturnValue();
    await userMongodbRepository.insert(createUserDTO);
    expect(spy).toBeCalled();
  });
});
