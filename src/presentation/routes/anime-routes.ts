import { Router } from 'express';

import { CreateAnimeController } from '../controllers/anime/create-anime.controller';
import { GetAnimeController } from '../controllers/anime/get-anime.controller'
import { GetAllAnimeController } from '../controllers/anime/get-all-animes.controller'
import { UpdateAnimeController } from '../controllers/anime/update-anime.controller'
import { DeleteAnimeController } from '../controllers/anime/delete-anime.controller'

const animeRouter = Router();

const create = new CreateAnimeController();
const get = new GetAnimeController();
const getall = new GetAllAnimeController();
const update = new UpdateAnimeController();
const remove = new DeleteAnimeController();

animeRouter.post('/create-anime', create.handle);
animeRouter.get('/get-anime/:id', get.handle);
animeRouter.get('/get-all-animes', getall.handle);
animeRouter.patch('/update-anime/:id', update.handle);
animeRouter.delete('/delete-anime/:id', remove.handle);

export { animeRouter };
