import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export async function registerSwagger(app) {
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'PlayShelf API',
        description: 'API REST para gerenciamento de biblioteca de jogos.',
        version: '1.0.0'
      },
      servers: [
        {
          url: 'http://localhost:3333',
          description: 'Servidor Local'
        }
      ]
    }
  })

  await app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true
    }
  })
}