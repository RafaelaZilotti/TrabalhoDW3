// @file: src/features/loans/loan.repository.js// @file: src/features/loans/loan.repository.js

export class LoanRepository {
    constructor(pool) {
        this.pool = pool;
    }

    async buscarTodos() {
        const resultado = await this.pool.query(
            `
            SELECT
                loans.id,
                loans.loan_date,
                loans.return_date,
                loans.returned,

                library.id AS library_id,

                users.id AS user_id,
                users.name AS user_name,
                users.email AS user_email,

                games.id AS game_id,
                games.title AS game_title

            FROM loans

            INNER JOIN library
                ON library.id = loans.library_id

            INNER JOIN users
                ON users.id = library.user_id

            INNER JOIN games
                ON games.id = library.game_id

            ORDER BY loans.id;
            `
        );
        return resultado.rows;
    }

    async buscarPorId(id) {
        const resultado = await this.pool.query(
            `
            SELECT
                loans.id,
                loans.loan_date,
                loans.return_date,
                loans.returned,

                library.id AS library_id,

                users.id AS user_id,
                users.name AS user_name,
                users.email AS user_email,

                games.id AS game_id,
                games.title AS game_title

            FROM loans

            INNER JOIN library
                ON library.id = loans.library_id

            INNER JOIN users
                ON users.id = library.user_id

            INNER JOIN games
                ON games.id = library.game_id

            WHERE loans.id = $1;
            `,[id]);
        return resultado.rows[0];
    }

    async buscarPorUsuario(userId) {
        const resultado = await this.pool.query(
            `
            SELECT
                loans.id,
                loans.loan_date,
                loans.return_date,
                loans.returned,

                library.id AS library_id,

                users.id AS user_id,
                users.name AS user_name,
                users.email AS user_email,

                games.id AS game_id,
                games.title AS game_title

            FROM loans

            INNER JOIN library
                ON library.id = loans.library_id

            INNER JOIN users
                ON users.id = library.user_id

            INNER JOIN games
                ON games.id = library.game_id

            WHERE users.id = $1

            ORDER BY loans.id;
            `,[userId]);
        return resultado.rows;
    }

    async salvar({libraryId, borrowerId, loanDate, returnDate, returned}) {
        const resultado = await this.pool.query(
            `
            INSERT INTO loans (library_id, borrower_id, loan_date, return_date, returned)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
            [libraryId,borrowerId,loanDate,returnDate,returned]);
        return resultado.rows[0];
    }

    async atualizar(id, {returnDate, returned}) {
        const resultado = await this.pool.query(`UPDATE loans SET return_date = $1, returned = $2 WHERE id = $3 RETURNING *; `,[returnDate,returned,id]);
        return resultado.rows[0];
    }

    async remover(id) {
        const resultado = await this.pool.query(`DELETE FROM loans WHERE id = $1 RETURNING *;`, [id]);
        return resultado.rows[0];
    }
}