import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get(`/search`)
  searchMovie(@Query(`year`) searchingYear: string) {
    return `We are searching for a movie with a made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with id: ${id}`;
  }

  @Post()
  createMovie(@Body() data) {
    return data;
  }

  @Delete(`/:id`)
  removeMovie(@Param(`id`) id: string) {
    return `this will delete a movie with the id: ${id}`;
  }

  @Patch(`/:id`)
  patchMovie(@Param(`id`) id: string, @Body() data) {
    return {
      updateMovie: id,
      ...data
    };
  }
}
