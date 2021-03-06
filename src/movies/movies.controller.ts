import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(private movieService: MoviesService) {
  }

  @Post()
  createMovie(@Body() movie: Movie): number {
    return this.movieService.createMovie(movie);
  }

  @Get()
  readMovies(): Movie[] {
    return this.movieService.readMovies();
  }

  @Get(':id')
  readMovie(@Param('id') id: number): Movie {
    return this.movieService.readMovie(id);
  }

  @Put()
  updateMovie(@Body() newMovie: Movie): Movie {
    return this.movieService.updateMovie(newMovie);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number) {
    return this.movieService.deleteMovie(id);
  }
}
