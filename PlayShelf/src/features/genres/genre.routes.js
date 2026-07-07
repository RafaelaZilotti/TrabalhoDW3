// @file: src/features/genres/genre.routes.js

import { GenreRepository } from "./genre.repository.js";
import { GenreService } from "./genre.service.js";
import { GenreController } from "./genre.controller.js";

import { buscarTodosGenresSchema, buscarPorIdSchema, salvarGenreSchema, atualizarGenreSchema, removerGenreSchema} from "./genre.schemas.js";

export async function genreRoutes(app){
    const genreRepository = new GenreRepository();
    const genreService = new GenreService(genreRepository);
    const genreController = new GenreController(genreService);

    app.get("/genres", { schema: buscarTodosGenresSchema }, genreController.buscarTodos.bind(genreController));
    app.get("/genres/:id", { schema: buscarPorIdSchema }, genreController.buscarPorId.bind(genreController));
    app.post("/genres", { schema: salvarGenreSchema }, genreController.salvar.bind(genreController));
    app.patch("/genres/:id", { schema: atualizarGenreSchema }, genreController.atualizar.bind(genreController));
    app.delete("/genres/:id", { schema: removerGenreSchema }, genreController.remover.bind(genreController));
}