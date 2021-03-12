import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEnum, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export enum Genre {
  Action,
  Comedy,
  Drama,
  Horror,
  Thriller,
}

@Entity()
export class Movie {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @MaxLength(20)
  @MinLength(1)
  name: string;

  @Column()
  @IsString()
  @MaxLength(20)
  @MinLength(5)
  director: string;

  @Column({ type: 'double' })
  @Min(1)
  @Max(200, {message: "Kein Film ist so lang"})
  length: number;

  @Column()
  @IsEnum(Genre)
  genre: Genre;
}

