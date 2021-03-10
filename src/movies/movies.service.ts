import { Injectable } from '@nestjs/common';
import { Movie } from './movie';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MoviesService {

  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {
      }

  createMovie(movie: Movie): Promise<Movie> {
    return this.movieRepo.save(movie);
  }

  readMovies(): Promise<Movie[]> {
    return this.movieRepo.find();
  }

  readMovie(id: number): Promise<Movie> {
    return this.movieRepo.findOne(id);
  }

  updateMovie(id: number, newMovie: Movie): Promise<UpdateResult> {
    return this.movieRepo.update(id, newMovie);
  }

  deleteMovie(id: number): Promise<DeleteResult> {
    return this.movieRepo.delete(id);
  }
}
