import express from 'express'
import 'reflect-metadata'
import { routes } from './routes'
import swagger from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import './database'

const app = express()

app.use(express.json())

app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile))

app.use(routes)

app.listen(8080, () => {
  console.log('api 8080')
})
