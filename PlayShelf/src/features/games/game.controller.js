// @file: src/features/games/game.controller.js

export class GameController {
    constructor(gameService) {
        this.service = gameService;
    }

    async buscarTodos(request, reply) {
        const games = await this.service.buscarTodos();

        return reply.status(200).send(games);
    }

    async buscarPorId(request, reply) {
        const { id } = request.params;

        const game = await this.service.buscarPorId(Number(id));

        return reply.status(200).send(game);
    }

    async salvar(request, reply) {
        const game = await this.service.salvar(request.body);

        return reply.status(201).send(game);
    }

    async atualizar(request, reply){
        const { id } = request.params;

        const game = await this.service.atualizar(Number(id), request.body);
        
        return reply.status(200).send(game);
    }

    async remover(request, reply){
        const { id } = request.params;

        const game = await this.service.remover(Number(id));
                
        return reply.status(200).send(game);
    }

}