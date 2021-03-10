import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepo: Repository<User>, private movieService: MoviesService) {
  }

  createUser(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  readUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async addMovieToWatchList(userId: number, movieId: number): Promise<User> {
    const movie = await this.movieService.readMovie(movieId);
    const user: User = await this.userRepo.findOne(userId, {relations: ["watchList"]});
    if (!user.watchList) {
      user.watchList = [];
    }
    if (!user.watchList.find(movie => movie.id == movieId)) {
      user.watchList.push(movie);
    }
    return this.userRepo.save(user);
  }

  async getWatchList(id: number): Promise<Movie[]> {
    const user: User = await this.userRepo.findOne(id, {relations: ["watchList"]});
    return user.watchList
  }
}
