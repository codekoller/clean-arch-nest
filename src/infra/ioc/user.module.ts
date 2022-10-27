import { Module } from '@nestjs/common';
import { UserRepositortyInterface } from 'src/domain/database/user-repository.interface';
import { UserController } from 'src/presentation/user/user.controller';
import { AddUserUseCase } from 'src/usecases/user/add-user.usecase';
import { DatabaseModule } from '../database/database.module';
import { UserMongodbRepository } from '../database/mongodb/repositories/user.repository';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [LoggerModule, DatabaseModule, ExceptionsModule],
  providers: [
    {
      provide: AddUserUseCase,
      useFactory(userRepo: UserRepositortyInterface) {
        return new AddUserUseCase(userRepo);
      },
      inject: [UserMongodbRepository],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
