import { inject, injectable } from 'tsyringe';
import { IAnimeRepository } from '@core/domain/anime/repositories/anime-repository.interface';

import { AnimeDto } from '@core/domain/anime/dtos/AnimeDto';
import { UpdateAnimeDto } from '@core/domain/anime/dtos/UpdateAnimeDto';

@injectable()
export class UpdateAnimeUseCase {
  constructor(
    @inject('AnimeRepository')
    private readonly animeRepository: IAnimeRepository,
  ) {}

  async execute(id: string, anime: UpdateAnimeDto): Promise<AnimeDto> {
    const _anime = await this.animeRepository.update(id, anime);
    return _anime;
  }
}
