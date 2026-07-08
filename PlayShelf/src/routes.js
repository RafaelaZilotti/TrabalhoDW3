// @file: src/routes.js

import { genreRoutes } from './features/genres/genre.routes.js';
import { gameRoutes } from './features/games/game.routes.js';
import { userRoutes } from './features/users/user.routes.js';
import { libraryRoutes } from './features/library/library.routes.js';
import { loanRoutes } from './features/loans/loan.routes.js';

export async function registerRoutes(app) {

  app.get("/", async() => {
    return { message: "PlayShelf API funcionando!" };
  })

  await app.register(genreRoutes);
  await app.register(gameRoutes);
  await app.register(userRoutes);
  await app.register(libraryRoutes);
  await app.register(loanRoutes);

}