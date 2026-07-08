// @file: src/features/loans/loan.service.js

import { AppError } from "../../errors/AppError.js";

export class LoanService {
    constructor(loanRepository, libraryRepository, userRepository) {
        this.repository = loanRepository;
        this.libraryRepository = libraryRepository;
        this.userRepository = userRepository;
    }

    async buscarTodos() {
        return await this.repository.buscarTodos();
    }

    async buscarPorId(id) {
        const loan = await this.repository.buscarPorId(id);
        if (!loan) {
            throw new AppError("Empréstimo não encontrado.", 404);}
        return loan;
    }

    async buscarPorUsuario(userId) {
        const user = await this.userRepository.buscarPorId(userId);
        if (!user) {
            throw new AppError("Usuário não encontrado.", 404);}
        return await this.repository.buscarPorUsuario(userId);
    }

    async salvar({libraryId, borrowerId, loanDate, returnDate, returned}) {
        const library = await this.libraryRepository.buscarPorId(libraryId);
        if (!library) {
            throw new AppError("Item da biblioteca não encontrado.", 404);
        }

        const borrower = await this.userRepository.buscarPorId(borrowerId);
        if (!borrower) {
            throw new AppError("Usuário que receberá o empréstimo não encontrado.", 404);
        }
        return await this.repository.salvar({libraryId, borrowerId, loanDate, returnDate, returned});
    }

    async atualizar(id, {returnDate, returned}) {
        const loan = await this.repository.buscarPorId(id);
        if (!loan) {
            throw new AppError("Empréstimo não encontrado.", 404);
        }
        return await this.repository.atualizar(id, {returnDate, returned});
    }

    async remover(id) {
        const loan = await this.repository.buscarPorId(id);
        if (!loan) {
            throw new AppError("Empréstimo não encontrado.", 404);
        }
        return await this.repository.remover(id);
    }
}