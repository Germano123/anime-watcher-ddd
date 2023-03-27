import { container } from 'tsyringe';

import { IAnimeRepository } from '@core/domain/anime/repositories/anime-repository.interface';
import { AnimeRepository } from '../repository/anime/anime.repository';

container.registerSingleton<IAnimeRepository>(
    'AnimeRepository',
    AnimeRepository,
);
