import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { DeleteAnimeUseCase } from '../../../application/usecases/anime/delete/delete-anime.usecase';

export class DeleteAnimeController {
  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const deleteAnimeUseCase = container.resolve(DeleteAnimeUseCase);
    try {
        const anime = await deleteAnimeUseCase.execute(id);
        return response.status(201).json(anime);
    } catch (error) {
        return response.status(400).json({ error });
    }
  }
}
