// @file: src/features/games/game.service.js

import { AppError } from "../../errors/AppError.js";


export class GameService {
    constructor(gameRepository, genreRepository) {
        this.repository = gameRepository;
        this.genreRepository = genreRepository;
    }

    async buscarTodos(){
        return await this.repository.buscarTodos();
    }

    async buscarPorId(id){
        const game =await this.repository.buscarPorId(id);

        if(!game){
            throw new AppError("Jogo não encontrado", 404);
        }
        return game;

    }

    async salvar(game){
        const genre = await this.genreRepository.buscarPorId(game.genre_id);
        if(!genre){
            throw new AppError("Gênero não encontrado", 404);
        }
        return await this.repository.salvar(game);

    }

    async atualizar(id, dadosGame){
        const game = await this.repository.buscarPorId(id);
        if(!game){
            throw new AppError("Jogo não encontrado", 404);
        }

        const genre = await this.genreRepository.buscarPorId(dadosGame.genre_id);
        if(!genre){
            throw new AppError("Gênero não encontrado", 404);
        }
        return await this.repository.atualizar(id, dadosGame);

    }

    async remover(id){
        const game = await this.repository.buscarPorId(id);

        if(!game){
            throw new AppError("Jogo não encontrado", 404);
        }
        return await this.repository.remover(id);

    }

}