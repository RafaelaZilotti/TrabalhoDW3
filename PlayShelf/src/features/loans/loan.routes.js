// @file: src/features/loans/loan.routes.js

import pool from "../../database/pool.js";

import { LoanRepository } from "./loan.repository.js";
import { LoanService } from "./loan.service.js";
import { LoanController } from "./loan.controller.js";

import { LibraryRepository } from "../library/library.repository.js";

import { UserRepository } from "../users/user.repository.js";

import {buscarTodosLoanSchema, buscarPorIdLoanSchema, buscarPorUsuarioLoanSchema, salvarLoanSchema, atualizarLoanSchema, removerLoanSchema} from "./loan.schemas.js";

export async function loanRoutes(app) {
    const libraryRepository = new LibraryRepository(pool);
    const userRepository = new UserRepository(pool);

    const loanRepository = new LoanRepository(pool);
    const loanService = new LoanService(loanRepository, libraryRepository, userRepository);
    const loanController = new LoanController(loanService);

    app.get("/loans", {schema: buscarTodosLoanSchema}, loanController.buscarTodos.bind(loanController));
    app.get("/loans/:id", {schema: buscarPorIdLoanSchema}, loanController.buscarPorId.bind(loanController));
    app.get("/loans/user/:userId", {schema: buscarPorUsuarioLoanSchema}, loanController.buscarPorUsuario.bind(loanController));
    app.post("/loans", {schema: salvarLoanSchema}, loanController.salvar.bind(loanController));
    app.patch("/loans/:id", {schema: atualizarLoanSchema}, loanController.atualizar.bind(loanController));
    app.delete("/loans/:id", {schema: removerLoanSchema}, loanController.remover.bind(loanController));

}