import { inject, injectable } from 'tsyringe';
import { IAnimeRepository } from '@core/domain/anime/repositories/anime-repository.interface';
import { CreateAnimeDto } from '@core/domain/anime/dtos/CreateAnimeDto';
import { AnimeDto } from '@core/domain/anime/dtos/AnimeDto';

@injectable()
export class CreateAnimeUseCase {
  constructor(
    @inject('AnimeRepository')
    private readonly animeRepository: IAnimeRepository,
  ) {}

  async execute(anime: CreateAnimeDto): Promise<AnimeDto> {
    const _anime = await this.animeRepository.create(anime);
    return _anime;
  }
}
