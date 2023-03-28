import { inject, injectable } from 'tsyringe';
import { IAnimeRepository } from '@core/domain/anime/repositories/anime-repository.interface';
import { AnimeDto } from '@core/domain/anime/dtos/AnimeDto';

@injectable()
export class DeleteAnimeUseCase {
  constructor(
    @inject('AnimeRepository')
    private readonly animeRepository: IAnimeRepository,
  ) {}

  async execute(id: string): Promise<AnimeDto> {
    const _anime = await this.animeRepository.delete(id);
    return _anime;
  }
}
