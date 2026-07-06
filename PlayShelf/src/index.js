import pool from './database/pool.js'

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()')

    console.log(' Conectado ao PostgreSQL!')
    console.log(result.rows[0])
  } catch (error) {
    console.error(' Erro ao conectar ao banco:')
    console.error(error)
  } finally {
    await pool.end()
  }
}

testConnection()