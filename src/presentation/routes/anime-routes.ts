import { Router } from 'express';

import { CreateAnimeController } from '../controllers/anime/create-anime.controller';
import { GetAllAnimeController } from '../controllers/anime/get-all-animes.controller'

const animeRouter = Router();

const create = new CreateAnimeController();
const getall = new GetAllAnimeController();

animeRouter.post('/create-anime', create.handle);
// animeRouter.get('/get-anime/:id', getanimeController.handle);
animeRouter.get('/get-all-animes', getall.handle);
// animeRouter.patch('/update-anime/:id', updateanimeController.handle);
// animeRouter.delete('/remove-anime/:id', removeanimeController.handle);

export { animeRouter };
