import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbModule } from './mongodb/mongodb.module';
import { UserMongodbRepository } from './mongodb/repositories/user.repository';
import { UserModel, UserSchema } from './mongodb/schemas/user.schema';

@Module({
  imports: [
    MongodbModule,
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UserMongodbRepository],
  exports: [UserMongodbRepository],
})
export class DatabaseModule {}
