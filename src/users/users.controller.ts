import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';
import { Movie } from '../movies/movie';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {
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
  addMovieToWatchList(@Param('userId') userId: number, @Param('movieId') movieId: number) {
    return this.userService.addMovieToWatchList(userId, movieId);
  }

  @Get(':userId/movies')
  getWatchList(@Param('userId') userId: number) {
    return this.userService.getWatchlist(userId);
  }
}
