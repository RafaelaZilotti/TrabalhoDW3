// @file: src/routes.js

import { genreRoutes } from './features/genres/genre.routes.js';
import { gameRoutes } from './features/games/game.routes.js';

export async function registerRoutes(app) {

  app.get("/", async() => {
    return { message: "PlayShelf API funcionando!" };
  })

  await app.register(genreRoutes);
  await app.register(gameRoutes);

}