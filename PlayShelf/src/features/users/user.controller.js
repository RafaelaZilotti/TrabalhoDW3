// @file: src/features/users/user.controller.js

export class UserController {
    constructor(userService) {
        this.service = userService;
    }

    async buscarTodos(request, reply) {
        const usuarios = await this.service.buscarTodos();

        return reply.send(usuarios);
    }

    async buscarPorId(request, reply) {
        const { id } = request.params;

        const usuario = await this.service.buscarPorId(id);

        return reply.send(usuario);
    }

    async buscarPorEmail(request, reply) {
        const { email } = request.params;

        const usuario = await this.service.buscarPorEmail(email);

        return reply.send(usuario);
    }

    async salvar(request, reply) {
        const usuario = await this.service.salvar(request.body);

        return reply.code(201).send(usuario);
    }

    async atualizar(request, reply) {
        const { id } = request.params;

        const usuario = await this.service.atualizar(id, request.body);

        return reply.send(usuario);
    }

    async remover(request, reply) {
        const { id } = request.params;

        await this.service.remover(id);

        return reply.code(204).send();
    }
}