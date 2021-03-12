import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Movie } from './movie';
import { MoviesService } from './movies.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ValidateMoviePipe } from './validate-movie.pipe';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Post()
  createMovie(@Body() movie: Movie): Promise<Movie> {
    return this.movieService.createMovie(movie);
  }

  @Get()
  readMovies(): Promise<Movie[]> {
    return this.movieService.readMovies();
  }

  @Get(':id')
  readMovie(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.movieService.readMovie(id);
  }

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() newMovie: Movie): Promise<UpdateResult> {
    return this.movieService.updateMovie(id, newMovie);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number): Promise<DeleteResult> {
    return this.movieService.deleteMovie(id);
  }
}
