// @file: src/routes.js

import { genreRoutes } from './features/genres/genre.routes.js';

export async function registerRoutes(app) {

  app.get("/", async() => {
    return { message: "PlayShelf API funcionando!" };
  })

  await app.register(genreRoutes);

}