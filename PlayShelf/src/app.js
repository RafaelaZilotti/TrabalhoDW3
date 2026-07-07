// @file: app.js

import Fastify from 'fastify'
import { registerSwagger } from './config/swagger.js'
import { registerRoutes } from './routes.js'

const app = Fastify({
  logger: true
})

await registerSwagger(app)

await registerRoutes(app)

export default app
