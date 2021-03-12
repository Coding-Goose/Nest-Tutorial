import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { Movie } from './movie';

@Injectable()
export class ValidateMoviePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const movie = value as Movie;
    if (movie.name.length > 20) {
      throw new HttpException("Name darf maximal 20 Zeichen lang sein", 400);
    }
    return value;
  }
}
