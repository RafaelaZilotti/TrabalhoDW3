// @file: src/features/genres/genre.service.js

import { AppError } from "../../errors/AppError.js";

export class GenreService {
    constructor(genreRepository) {
        this.repository = genreRepository;
    }

    async buscarTodos(){
        return await this.repository.buscarTodos();
    }

    async buscarPorId(id){
        const genre = await this.repository.buscarPorId(id);
        if(!genre){
            throw new AppError('Gênero não encontrado', 404);
        }
        return genre;
    }

    async salvar(genre){
        const genreExistente = await this.repository.buscarPorNome(genre.name);
        if(genreExistente){
            throw new AppError('Gênero já existe', 409);
        }
        return await this.repository.salvar(genre);
    }

    async atualizar(id, genreAtualizado){
        const genre = await this.repository.buscarPorId(id);
        if(!genre){
            throw new AppError('Gênero não encontrado', 404);
        }

        const genreExistente = await this.repository.buscarPorNome(genreAtualizado.name);
        if(genreExistente && genreExistente.id !== Number(id)){
            throw new AppError('Gênero já existe', 409);
        }

        return await this.repository.atualizar(id, genreAtualizado);
    }

    async remover(id){
        const genre = await this.repository.buscarPorId(id);
        if(!genre){
            throw new AppError('Gênero não encontrado', 404);
        }

        const temJogos = await this.repository.temJogos(id);
        if(temJogos){
            throw new AppError('Não é possível remover o gênero, existem jogos associados a ele', 409);
        }

        await this.repository.remover(id);
    }
}