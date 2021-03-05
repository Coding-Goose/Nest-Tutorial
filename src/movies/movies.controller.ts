import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Post()
  createMovie(@Body() movie: Movie): number {
    return this.movieService.createMovie(movie);
  }

  @Get()
  readMovies() {
    return this.movieService.readMovies();
  }

  @Get(':id')
  readMovie(@Param('id') id: number) {
    return this.movieService.readMovie(id);
  }

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() newMovie: Movie) {
    return this.movieService.updateMovie(newMovie);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number) {
    return this.movieService.deleteMovie(id);
  }
}
