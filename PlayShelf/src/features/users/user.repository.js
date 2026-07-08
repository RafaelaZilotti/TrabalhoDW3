// @file: src/features/users/user.repository.js

export class UserRepository {

    constructor(pool) {
        this.pool = pool;
    }

    async buscarTodos() {
        const resultado = await this.pool.query(`SELECT id, name, email, created_at FROM users ORDER BY id;`);
        return resultado.rows;
    }

    async buscarPorId(id) {
        const resultado = await this.pool.query(`SELECT id, name, email, created_at FROM users WHERE id = $1;`,[id]);
        return resultado.rows[0];
    }

    async buscarPorEmail(email) {
        const resultado = await this.pool.query(`SELECT id, name, email, created_at FROM users WHERE email = $1;`,[email]);
        return resultado.rows[0];
    }

    async salvar(user) {
        const { name, email } = user;
        const resultado = await this.pool.query(
            `INSERT INTO users (name, email) 
            VALUES ($1, $2) 
            RETURNING id, name, email, created_at;
            ` ,[name, email]); 
        return resultado.rows[0];
    }

    async atualizar(id, user) {
        const { name, email } = user;

        const resultado = await this.pool.query(
            `
            UPDATE users
            SET name = $1, email = $2
            WHERE id = $3
            RETURNING id, name, email, created_at;
            `,[name, email, id]
        );
        return resultado.rows[0];
    }

    async remover(id) {
        await this.pool.query(`DELETE FROM users WHERE id = $1;`,[id]);
    }
}