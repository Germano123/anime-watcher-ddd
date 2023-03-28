import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { UpdateAnimeUseCase } from '../../../application/usecases/anime/update/update-anime.usecase';

export class UpdateAnimeController {
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;
        const { anime } = request.body;
        const updateAnimeUseCase = container.resolve(UpdateAnimeUseCase);
        try {
            const _anime = await updateAnimeUseCase.execute(id, { anime });
            return response.status(201).json(_anime);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}
