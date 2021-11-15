import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(`/search`)
  searchMovie(@Query(`year`) searchingYear: string) {
    return `We are searching for a movie with a made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  createMovie(@Body() data: CreateMovieDto): Movie {
    return this.moviesService.createMovie(data);
  }

  @Delete(`/:id`)
  removeMovie(@Param(`id`) id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(`/:id`)
  patchMovie(@Param(`id`) id: number, @Body() data: UpdateMovieDto) {
    return this.moviesService.updateMovie(id, data);
  }
}
