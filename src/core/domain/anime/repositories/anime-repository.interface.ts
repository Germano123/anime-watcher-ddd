import { AnimeDto } from '../dtos/AnimeDto';
import { CreateAnimeDto } from '../dtos/CreateAnimeDto';
import { UpdateAnimeDto } from '../dtos/UpdateAnimeDto';

export interface IAnimeRepository {
  create(animeData: CreateAnimeDto): Promise<AnimeDto>;
  findById(id: string): Promise<AnimeDto>;
  findAll(): Promise<AnimeDto[]>;
  update(id: string, anime: UpdateAnimeDto): Promise<AnimeDto>;
  delete(id: string): Promise<AnimeDto>;
}
