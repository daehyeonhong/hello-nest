import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService]
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe(`getAll`, () => {
    it(`should return an array`, () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe(`getOne`, () => {
    it('should be return a movie', () => {
      service.createMovie({
        title: `Test Movie`,
        genres: [`test`],
        year: 2000
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
      expect(movie.title).toEqual(`Test Movie`);
    });
    it('should throw 404 error', () => {
      const id = 9999;
      try {
        service.getOne(id);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual(`Not found Movie with ID: ${id}`);
      }
    });
  });
});
