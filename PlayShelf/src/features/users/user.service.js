// @file: src/features/users/user.service.js

import { AppError } from "../../errors/AppError.js";

export class UserService {
    constructor(userRepository) {
        this.repository = userRepository;
    }

    async buscarTodos() {
        return await this.repository.buscarTodos();
    }

    async buscarPorId(id) {
        const usuario = await this.repository.buscarPorId(id);
        if (!usuario) {
            throw new AppError("Usuário não encontrado.", 404);
        }
        return usuario;
    }

    async buscarPorEmail(email) {
        const usuario = await this.repository.buscarPorEmail(email);
        if (!usuario) {
            throw new AppError("Usuário não encontrado.", 404);
        }
        return usuario;
    }

    async salvar(user) {
        const usuarioExistente = await this.repository.buscarPorEmail(user.email);
        if (usuarioExistente) {
            throw new AppError("Já existe um usuário com este e-mail.", 409);
        }
        return await this.repository.salvar(user);
    }

    async atualizar(id, user) {
        const usuario = await this.repository.buscarPorId(id);
        if (!usuario) {
            throw new AppError("Usuário não encontrado.", 404);
        }

        const usuarioComMesmoEmail = await this.repository.buscarPorEmail(user.email);
        if (usuarioComMesmoEmail && usuarioComMesmoEmail.id !== Number(id) ) {
            throw new AppError("Já existe um usuário com este e-mail.", 409);
        }
        return await this.repository.atualizar(id, user);
    }

    async remover(id) {
        const usuario = await this.repository.buscarPorId(id);
        if (!usuario) {
            throw new AppError("Usuário não encontrado.", 404);
        }
        await this.repository.remover(id);
    }
}