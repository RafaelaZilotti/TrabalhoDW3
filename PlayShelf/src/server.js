// @file: server.js

import app from './app.js'
import { AppError } from './errors/AppError.js'

app.setErrorHandler((error, request, reply) => {

  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      statusCode: error.statusCode,
      message: error.message
    })
  }

  request.log.error(error)

  return reply.status(500).send({
    statusCode: 500,
    message: 'Erro interno do servidor.'
  })
})

export async function startServer() {
  await app.listen({
    port: Number(process.env.PORT) || 3333,
    host: '0.0.0.0'
  })
}