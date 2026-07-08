// @file: src/features/library/library.controller.js

export class LibraryController {
    constructor(libraryService) {
        this.service = libraryService;
    }

    async buscarTodos(request, reply) {
        const library = await this.service.buscarTodos();

        return reply.status(200).send(library);
    }

    async buscarPorId(request, reply) {
        const { id } = request.params;

        const libraryItem = await this.service.buscarPorId(id);

        return reply.status(200).send(libraryItem);
    }

    async buscarPorUsuario(request, reply) {
        const { userId } = request.params;

        const library = await this.service.buscarPorUsuario(userId);

        return reply.status(200).send(library);
    }

    async salvar(request, reply) {
        const {userId, gameId, status, purchaseDate} = request.body;

        const libraryItem = await this.service.salvar({userId, gameId, status, purchaseDate});

        return reply.status(201).send(libraryItem);
    }

    async atualizar(request, reply) {
        const { id } = request.params;

        const {status, purchaseDate} = request.body;

        const libraryItem = await this.service.atualizar(id, {status, purchaseDate});

        return reply.status(200).send(libraryItem);
    }

    async remover(request, reply) {
        const { id } = request.params;

        const libraryItem = await this.service.remover(id);

        return reply.status(200).send(libraryItem);
    }

}