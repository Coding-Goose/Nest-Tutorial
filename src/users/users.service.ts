import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
import { MoviesService } from '../movies/movies.service';
import { Movie } from '../movies/movie';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepo: Repository<User>, private movieService: MoviesService) {
  }

  createUser(user: User): Promise<User> {
    return this.userRepo.save(user);
  }

  readUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async addMovieToWatchList(userId: number, movieId: number) {
    const movie: Movie = await this.movieService.readMovie(movieId);
    const user: User = await this.userRepo.findOne(userId, {relations: ["watchList"]});
    if (!user.watchList) {
      user.watchList = [];
    }
    if (!user.watchList.find(movie => movie.id == movieId)) {
      user.watchList.push(movie);
    }
    return this.userRepo.save(user);
  }

  async getWatchlist(id: number): Promise<Movie[]> {
    const user: User = await this.userRepo.findOne(id, {relations: ["watchList"]});
    return user.watchList;
  }
}
