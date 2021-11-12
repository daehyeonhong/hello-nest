import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: number): boolean {
    this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  createMovie(data): Movie {
    this.movies.push({
      id: this.movies.length + 1,
      ...data
    });
    return this.movies.find((movie) => movie.id === this.movies.length + 1);
  }
}
