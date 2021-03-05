import { Injectable } from '@nestjs/common';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  createMovie(movie: Movie): number {
    this.movies.push(movie);
    return movie.id;
  }

  readMovies(): Movie[] {
    return this.movies;
  }

  readMovie(id: number): Movie {
    return this.movies.find((movie) => movie.id == id);
  }

  updateMovie(newMovie: Movie) {
    const index = this.movies.findIndex((movie) => movie.id == newMovie.id);
    if (index > -1) {
      this.movies[index] = newMovie;
      return this.movies[index];
    }
  }

  deleteMovie(id: number) {
    this.movies = this.movies.filter((movie) => movie.id != id);
  }
}
