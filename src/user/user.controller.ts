import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Movie } from '../movies/movie';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get()
  readUsers(): Promise<User[]> {
    return this.userService.readUsers();
  }

  @Put(':userId/movies/:movieId')
  addMovieToWatchList(@Param('userId') id: number, @Param('movieId') movieId: number): Promise<User> {
    return this.userService.addMovieToWatchList(id, movieId);
  }

  @Get(':userId/movies')
  getWatchList(@Param('userId') id: number): Promise<Movie[]> {
    return this.userService.getWatchList(id);
  }
}
