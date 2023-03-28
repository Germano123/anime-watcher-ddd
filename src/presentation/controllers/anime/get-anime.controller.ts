import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { GetAnimeUseCase } from '../../../application/usecases/anime/get/get-anime.usecase';

export class GetAnimeController {
  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const getAnimeUseCase = container.resolve(GetAnimeUseCase);
    try {
        const anime = await getAnimeUseCase.execute(id);
        return response.status(201).json(anime);
    } catch (error) {
        return response.status(400).json({ error });
    }
  }
}
