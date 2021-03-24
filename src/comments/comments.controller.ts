import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment, CommentDocument } from './comment';

@Controller('comments')
export class CommentsController {

  constructor(private commentsService: CommentsService) {
  }

  @Post()
  createMovie(@Body() comment: Comment): Promise<CommentDocument> {
    return this.commentsService.create(comment);
  }

  @Get()
  readMovies(): Promise<CommentDocument[]> {
    return this.commentsService.readComments();
  }

  @Get(':id')
  readMovie(@Param('id') id: string): Promise<CommentDocument> {
    return this.commentsService.readComment(id)
  }

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() newComment: Comment): Promise<CommentDocument> {
    return this.commentsService.updateComment(id, newComment);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }

}
