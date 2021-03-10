import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  director: string;

  @Column({type: 'double'})
  length: number;

  @Column()
  genre: Genre;
}

export enum Genre {
  Action,
  Comedy,
  Drama,
  Horror,
  Thriller,
}
