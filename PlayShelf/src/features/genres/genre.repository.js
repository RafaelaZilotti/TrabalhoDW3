// @file: src/features/genres/genre.repository.js

export class GenreRepository {

    constructor(pool){
        this.pool = pool;
    }

    async buscarTodos() {
        const resultado = await pool.query('SELECT id, name FROM genres ORDER BY name;');
        return resultado.rows;
    }

    async buscarPorId(id) {
        const resultado = await pool.query('SELECT id, name FROM genres WHERE id = $1', [id]);
        return resultado.rows[0] ?? null;
    }

    async buscarPorNome(nome) {
        const resultado = await pool.query('SELECT id, name FROM genres WHERE LOWER(name) = LOWER($1);', [nome]);
        return resultado.rows[0] ?? null;
    }
    
    async salvar(genre) {
        const resultado = await pool.query('INSERT INTO genres (name) VALUES ($1) RETURNING id, name', [genre.name]);
        return resultado.rows[0];
    }

    async atualizar(id,genreAtualizado){
        const resultado = await pool.query('UPDATE genres SET name = $1 WHERE id = $2 RETURNING id, name', [genreAtualizado.name, id]);
        return resultado.rows[0];
    }

    async remover(id){
        const resultado = await pool.query('DELETE FROM genres WHERE id = $1', [id]);
        return resultado.rows[0];
    }

    async temJogos(id){
        const resultado = await pool.query('SELECT COUNT(*)::int AS total FROM games WHERE genre_id = $1;', [id]);
        return resultado.rows[0].total > 0;
    }

}