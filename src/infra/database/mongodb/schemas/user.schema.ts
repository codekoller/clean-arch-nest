import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Document } from 'mongoose';

@Schema({
  autoIndex: true,
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document {
  @Prop({
    type: String,
    default: randomUUID(),
  })
  _id: string;
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  surname: string;

  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: Date,
  })
  createdAt: string;

  @Prop({
    type: Date,
  })
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
