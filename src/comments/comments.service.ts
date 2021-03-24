import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './comment';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
  }

    async create(comment: Comment): Promise<CommentDocument> {
      const createdComment = new this.commentModel(comment);
      return createdComment.save();
    }

    async readComments(): Promise<CommentDocument[]> {
      return this.commentModel.find().exec();
    }

    async readComment(id: string): Promise<CommentDocument> {
    return this.commentModel.findById(id).exec();
    }

    async updateComment(id: string, newComment: Comment): Promise<CommentDocument> {
      const comment: CommentDocument = await this.readComment(id);
      comment.message = newComment.message ? newComment.message : comment.message;
      comment.username = newComment.username ? newComment.username : comment.username;
      comment.writtenAt = newComment.writtenAt ? newComment.writtenAt : comment.writtenAt;
      return comment.save();
    }

    async deleteComment(id: string) {
      return this.commentModel.deleteOne({_id: id}).exec();
    }
}
