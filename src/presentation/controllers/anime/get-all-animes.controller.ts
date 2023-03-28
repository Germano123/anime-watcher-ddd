import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { GetAllAnimeUseCase } from '../../../application/usecases/anime/get-all/get-all.usecase';

export class GetAllAnimeController {
  async handle(request: Request, response: Response): Promise<any> {
    const getallAnimeUseCase = container.resolve(GetAllAnimeUseCase);
    try {
      const animes = await getallAnimeUseCase.execute();
      return response.status(201).json(animes);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
