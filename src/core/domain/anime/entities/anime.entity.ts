import { Entity } from '../../../../core/common/entity';
import { CreateAnimeDto } from '../dtos/CreateAnimeDto';
import { UpdateAnimeDto } from '../dtos/UpdateAnimeDto';

export class Anime extends Entity<CreateAnimeDto> {
    private constructor(props: CreateAnimeDto, id?: string) {
        super(props, id);
    }

    static create(props: CreateAnimeDto, id?: string) {
        const entity = new Anime(props, id);
        return entity;
    }

    public update(body: UpdateAnimeDto) {
        Object.assign(this.props, body);
    }
}
