// @file: src/features/library/library.service.js

import { AppError } from "../../errors/AppError.js";

export class LibraryService {
    constructor(libraryRepository, userRepository, gameRepository) {
        this.repository = libraryRepository;
        this.userRepository = userRepository;
        this.gameRepository = gameRepository;
    }

    async buscarTodos() {
        return await this.repository.buscarTodos();
    }

    async buscarPorId(id) {
        const libraryItem = await this.repository.buscarPorId(id);
        if (!libraryItem) {
            throw new AppError("Registro da biblioteca não encontrado.", 404);
        }
        return libraryItem;
    }

    async buscarPorUsuario(userId) {
        const user = await this.userRepository.buscarPorId(userId);
        if (!user) {
            throw new AppError("Usuário não encontrado.", 404);
        }
        return await this.repository.buscarPorUsuario(userId);
    }

    async salvar({userId, gameId, status, purchaseDate}) {
        const user = await this.userRepository.buscarPorId(userId);
        if (!user) {
            throw new AppError("Usuário não encontrado.", 404);
        }

        const game = await this.gameRepository.buscarPorId(gameId);
        if (!game) {
            throw new AppError("Jogo não encontrado.", 404);
        }

        const bibliotecaUsuario = await this.repository.buscarPorUsuario(userId);
        const jogoJaExiste = bibliotecaUsuario.some(item => item.game_id === gameId);
        if (jogoJaExiste) {
            throw new AppError("Este jogo já está na biblioteca do usuário.", 409);
        }

        return await this.repository.salvar({userId, gameId, status, purchaseDate});

    }

    async atualizar(id, {status, purchaseDate}) {
        const libraryItem = await this.repository.buscarPorId(id);
        if (!libraryItem) {
            throw new AppError("Registro da biblioteca não encontrado.", 404);
        }
        return await this.repository.atualizar(id,{status,purchaseDate});

    }

    async remover(id) {
        const libraryItem = await this.repository.buscarPorId(id);
        if (!libraryItem) {
            throw new AppError("Registro da biblioteca não encontrado.", 404);
        }
        return await this.repository.remover(id);

    }

}