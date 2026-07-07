// @file: routes.js

export async function registerRoutes(app) {

  app.get(
    '/',
    {
      schema: {
        tags: ['Home'],
        summary: 'Verifica se a API está funcionando',
        description: 'Endpoint utilizado para verificar o funcionamento da API.',

        response: {
          200: {
            type: 'object',
            properties: {
              message: {
                type: 'string'
              }
            }
          }
        }
      }
    },

    async () => {
      return {
        message: 'PlayShelf API'
      }
    }
  )

}