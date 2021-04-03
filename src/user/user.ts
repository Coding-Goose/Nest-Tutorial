import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from '../movies/movie';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @ManyToMany(() => Movie, {
    cascade: true
  })
  @JoinTable()
  watchList: Movie[];
}
