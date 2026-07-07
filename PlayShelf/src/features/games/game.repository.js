// @file: src/features/games/game.repository.js

export class GameRepository {
    constructor(){
        this.pool = pool;
    }

    async buscarTodos() {

        const resultado = await this.pool.query(`
            SELECT
                games.id,
                games.title,
                games.release_year,

                genres.id AS genre_id,
                genres.name AS genre_name,

                game_details.developer,
                game_details.publisher,
                game_details.description,
                game_details.cover_url,
                game_details.minimum_requirements

            FROM games

            INNER JOIN genres
            ON games.genre_id = genres.id

            LEFT JOIN game_details
            ON games.id = game_details.game_id

            ORDER BY games.id;
        `);

        return resultado.rows;
    }


    async buscarPorId(id) {

        const resultado = await this.pool.query(`

            SELECT
                games.id,
                games.title,
                games.release_year,

                genres.id AS genre_id,
                genres.name AS genre_name,

                game_details.developer,
                game_details.publisher,
                game_details.description,
                game_details.cover_url,
                game_details.minimum_requirements

            FROM games

            INNER JOIN genres
            ON games.genre_id = genres.id

            LEFT JOIN game_details
            ON games.id = game_details.game_id

            WHERE games.id = $1;

        `,[id]);

        return resultado.rows[0];
    }


    async salvar({title, release_year, genre_id}) {

        const resultado = await this.pool.query(`
            INSERT INTO games(title, release_year, genre_id)
            VALUES($1, $2, $3)
            RETURNING *;
        `,[ title, release_year, genre_id]);

        return resultado.rows[0];
    }


    async atualizar(id, {title, release_year, genre_id}) {

        const resultado = await this.pool.query(`
            UPDATE games
            SET title = $1, release_year = $2, genre_id = $3
            WHERE id = $4
            RETURNING *;

        `,[title, release_year, genre_id, id]);

        return resultado.rows[0];
    }


    async remover(id){
        const resultado = await this.pool.query(`DELETE FROM games WHERE id = $1 RETURNING *;`,[id]);
        return resultado.rows[0];
    }

}