export interface Movie {
  id: number;
  name: string;
  director: string;
  length: number;
  genre: Genre;
}

export enum Genre {
  Action,
  Comedy,
  Drama,
  Horror,
  Thriller,
}
