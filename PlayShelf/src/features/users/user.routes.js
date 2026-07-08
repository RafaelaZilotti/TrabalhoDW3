// @file: src/features/users/user.routes.js

import pool from "../../database/pool.js";

import { UserRepository } from "./user.repository.js";
import { UserService } from "./user.service.js";
import { UserController } from "./user.controller.js";

import {buscarUsuariosSchema, buscarUsuarioPorIdSchema, buscarUsuarioPorEmailSchema, salvarUsuarioSchema, atualizarUsuarioSchema, removerUsuarioSchema} from "./user.schemas.js";

export async function userRoutes(app) {
    const userRepository = new UserRepository(pool);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    app.get("/users",{schema: buscarUsuariosSchema},userController.buscarTodos.bind(userController));
    app.get("/users/:id",{schema: buscarUsuarioPorIdSchema},userController.buscarPorId.bind(userController));
    app.get("/users/email/:email",{schema: buscarUsuarioPorEmailSchema},userController.buscarPorEmail.bind(userController));
    app.post("/users",{schema: salvarUsuarioSchema},userController.salvar.bind(userController));
    app.patch("/users/:id",{schema: atualizarUsuarioSchema},userController.atualizar.bind(userController));
    app.delete("/users/:id",{schema: removerUsuarioSchema},userController.remover.bind(userController));

}