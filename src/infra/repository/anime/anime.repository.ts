import { Anime } from '../../../core/domain/anime/entities/anime.entity';
import { AnimeMapper } from '../../../core/domain/anime/mappers/anime.mapper';
import { IAnimeRepository } from '../../../core/domain/anime/repositories/anime-repository.interface';

import { AnimeDto } from '../../../core/domain/anime/dtos/AnimeDto';
import { CreateAnimeDto } from '../../../core/domain/anime/dtos/CreateAnimeDto';
import { UpdateAnimeDto } from '../../../core/domain/anime/dtos/UpdateAnimeDto';

export class AnimeRepository implements IAnimeRepository {
    private animes: Anime[] = [];

    async findAll(): Promise<AnimeDto[]> {
        return this.animes.map((anime) => AnimeMapper.toDto(anime));
    }
    
    async findById(id: string): Promise<AnimeDto> {
        throw new Error('Method not implemented.');
    }
    
    async create(anime: CreateAnimeDto): Promise<AnimeDto> {
        const entity = Anime.create({ 
            name: anime.name,
        });
        this.animes.push(entity);
        return AnimeMapper.toDto(entity);
    }
    
    async update(id: string, anime: UpdateAnimeDto): Promise<AnimeDto> {
        throw new Error('Method not implemented.');
    }
    
    async delete(id: string): Promise<AnimeDto> {
        throw new Error('Method not implemented.');
    }
}
