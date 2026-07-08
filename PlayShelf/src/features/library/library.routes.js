// @file: src/features/library/library.routes.js// @file: src/features/library/library.routes.js

import pool from "../../database/pool.js";

import { LibraryRepository } from "./library.repository.js";
import { LibraryService } from "./library.service.js";
import { LibraryController } from "./library.controller.js";

import { UserRepository } from "../users/user.repository.js";

import { GameRepository } from "../games/game.repository.js";

import {buscarTodosLibrarySchema, buscarPorIdLibrarySchema, buscarPorUsuarioLibrarySchema, salvarLibrarySchema, atualizarLibrarySchema, removerLibrarySchema} from "./library.schemas.js";

export async function libraryRoutes(app) {
    const userRepository = new UserRepository(pool);

    const gameRepository = new GameRepository(pool);

    const libraryRepository = new LibraryRepository(pool);
    const libraryService = new LibraryService(libraryRepository, userRepository, gameRepository);
    const libraryController = new LibraryController(libraryService);

    app.get("/library", {schema: buscarTodosLibrarySchema}, libraryController.buscarTodos.bind(libraryController));
    app.get("/library/:id", {schema: buscarPorIdLibrarySchema}, libraryController.buscarPorId.bind(libraryController));
    app.get("/library/user/:userId", {schema: buscarPorUsuarioLibrarySchema}, libraryController.buscarPorUsuario.bind(libraryController));
    app.post("/library", {schema: salvarLibrarySchema}, libraryController.salvar.bind(libraryController));
    app.patch("/library/:id", {schema: atualizarLibrarySchema}, libraryController.atualizar.bind(libraryController));
    app.delete("/library/:id", {schema: removerLibrarySchema}, libraryController.remover.bind(libraryController));

}