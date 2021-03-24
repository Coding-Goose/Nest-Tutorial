import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Document & Comment;

@Schema()
export class Comment {

  @Prop()
  message: string;

  @Prop()
  writtenAt: Date;

  @Prop()
  username: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
