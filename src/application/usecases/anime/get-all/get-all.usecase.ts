import { inject, injectable } from 'tsyringe';
import { IAnimeRepository } from '@core/domain/anime/repositories/anime-repository.interface';
import { AnimeDto } from '@core/domain/anime/dtos/AnimeDto';

@injectable()
export class GetAllAnimeUseCase {
  constructor(
    @inject('AnimeRepository')
    private readonly animeRepository: IAnimeRepository,
  ) {}

  async execute(): Promise<AnimeDto[]> {
    const animes = await this.animeRepository.findAll();
    return animes;
  }
}
