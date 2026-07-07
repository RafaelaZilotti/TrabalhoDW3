// @file: src/features/games/game.routes.js

import { pool } from "../../database/pool.js";

import { GameRepository } from "./game.repository.js";
import { GameService } from "./game.service.js";
import { GameController } from "./game.controller.js";

import { GenreRepository } from "../genres/genre.repository.js";

import {buscarTodosGamesSchema, buscarGamePorIdSchema, salvarGameSchema, atualizarGameSchema, removerGameSchema} from "./game.schemas.js";

export async function gameRoutes(app) {
    const genreRepository = new GenreRepository(pool);

    const gameRepository = new GameRepository(pool);
    const gameService = new GameService(gameRepository, genreRepository);
    const gameController = new GameController(gameService);

    app.get("/games",{schema: buscarTodosGamesSchema},gameController.buscarTodos.bind(gameController));
    app.get("/games/:id",{schema: buscarGamePorIdSchema},gameController.buscarPorId.bind(gameController));
    app.post("/games",{schema: salvarGameSchema},gameController.salvar.bind(gameController));
    app.patch("/games/:id",{schema: atualizarGameSchema},gameController.atualizar.bind(gameController));
    app.delete("/games/:id",{schema: removerGameSchema},gameController.remover.bind(gameController));

}