import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { CreateAnimeUseCase } from '../../../application/usecases/anime/create/create-anime.usecase';

export class CreateAnimeController {
  async handle(request: Request, response: Response): Promise<any> {
    const { name } = request.body;
    const createAnimeUseCase = container.resolve(CreateAnimeUseCase);
    try {
        const anime = await createAnimeUseCase.execute({ name });
        return response.status(201).json(anime);
    } catch (error) {
        return response.status(400).json({ error });
    }
  }
}
