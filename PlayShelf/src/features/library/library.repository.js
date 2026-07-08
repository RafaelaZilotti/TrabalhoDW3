// @file: src/features/library/library.repository.js

export class LibraryRepository {

    constructor(pool) {
        this.pool = pool;
    }

    async buscarTodos() {
        const resultado = await this.pool.query(
            `
            SELECT
                library.id,
                library.status,
                library.purchase_date,

                users.id AS user_id,
                users.name AS user_name,

                games.id AS game_id,
                games.title AS game_title

            FROM library

            INNER JOIN users
                ON users.id = library.user_id

            INNER JOIN games
                ON games.id = library.game_id

            ORDER BY library.id;
            `
        );
        return resultado.rows;
    }


    async buscarPorId(id) {

        const resultado = await this.pool.query(
            `
            SELECT
                library.id,
                library.status,
                library.purchase_date,

                users.id AS user_id,
                users.name AS user_name,

                games.id AS game_id,
                games.title AS game_title

            FROM library

            INNER JOIN users
                ON users.id = library.user_id

            INNER JOIN games
                ON games.id = library.game_id

            WHERE library.id = $1;
            `,[id]);
        return resultado.rows[0];
    }


    async buscarPorUsuario(userId) {

        const resultado = await this.pool.query(
            `
            SELECT
                library.id,
                library.status,
                library.purchase_date,

                games.id AS game_id,
                games.title AS game_title

            FROM library

            INNER JOIN games
                ON games.id = library.game_id

            WHERE library.user_id = $1

            ORDER BY library.id;
            `,[userId]);
        return resultado.rows;
    }


    async salvar({userId, gameId, status, purchaseDate}) {

        const resultado = await this.pool.query(
            `
            INSERT INTO library (user_id, game_id, status, purchase_date)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            `,[userId, gameId, status, purchaseDate]);
        return resultado.rows[0];
    }


    async atualizar(id, {status, purchaseDate}) {
        const resultado = await this.pool.query(`UPDATE library SET status = $1, purchase_date = $2 WHERE id = $3 RETURNING *;`, [status, purchaseDate, id]);
        return resultado.rows[0];
    }


    async remover(id) {
        const resultado = await this.pool.query(`DELETE FROM library WHERE id = $1 RETURNING *; `, [id] );
        return resultado.rows[0];
    }

}