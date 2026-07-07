// @file: src/features/genres/genre.controller.js

export class GenreController {
  constructor(genreService) {
    this.service = genreService;
  }

  async buscarTodos(request, reply) {
    const genres = await this.service.buscarTodos();

    return reply.status(200).send(genres);
  }

  async buscarPorId(request, reply) {
    const { id } = request.params;

    const genre = await this.service.buscarPorId(Number(id));

    return reply.status(200).send(genre);
  }

  async salvar(request, reply) {
    const genre = await this.service.salvar(request.body);

    return reply.status(201).send(genre);
  }

  async atualizar(request, reply) {
    const { id } = request.params;

    const genre = await this.service.atualizar(Number(id), request.body);

    return reply.status(200).send(genre);
  }

  async remover(request, reply) {
    const { id } = request.params;

    await this.service.remover(Number(id));

    return reply.status(204).send();
  }
}