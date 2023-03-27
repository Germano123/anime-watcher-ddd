import { AnimeDto } from '../dtos/AnimeDto';
import { Anime } from '../entities/anime.entity';

export class AnimeMapper {
    static toDto(entity: Anime): AnimeDto {
        const { id } = entity;

        return { id };
    }

    static toDomain(entity: AnimeDto): Anime {
        const { id, ...rest } = entity;
        return Anime.create({ ...rest }, id);
    }
}
