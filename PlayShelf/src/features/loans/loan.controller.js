// @file: src/features/loans/loan.controller.js

export class LoanController {
    constructor(loanService) {
        this.service = loanService;
    }

    async buscarTodos(request, reply) {
        const loans = await this.service.buscarTodos();

        return reply.status(200).send(loans);
    }

    async buscarPorId(request, reply) {
        const { id } = request.params;

        const loan = await this.service.buscarPorId(id);

        return reply.status(200).send(loan);
    }

    async buscarPorUsuario(request, reply) {
        const { userId } = request.params;

        const loans = await this.service.buscarPorUsuario(userId);

        return reply.status(200).send(loans);
    }

    async salvar(request, reply) {
        const loan = await this.service.salvar(request.body);

        return reply.status(201).send(loan);
    }

    async atualizar(request, reply) {
        const { id } = request.params;

        const loan = await this.service.atualizar(id, request.body);

        return reply.status(200).send(loan);
    }

    async remover(request, reply) {
        const { id } = request.params;

        const loan = await this.service.remover(id);

        return reply.status(200).send(loan);
    }
}