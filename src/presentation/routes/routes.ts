import { Router } from 'express';
import { animeRouter } from './anime-routes';

const routes = Router();

routes.get('/', (req, res) => {
    res.send("Hello World!");
});

routes.use('/animes', animeRouter);

export { routes };
