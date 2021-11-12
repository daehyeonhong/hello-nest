import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with id: ${id}`;
  }

  @Post()
  createMovie() {
    return 'this will create a movie';
  }

  @Delete(`/:id`)
  removeMovie(@Param(`id`) id: string) {
    return `this will delete a movie with the id: ${id}`;
  }

  @Patch(`/:id`)
  patchMovie(@Param(`id`) id: string) {
    return `This will patch a movie with the id: ${id}`;
  }
}
