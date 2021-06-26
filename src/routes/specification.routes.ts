import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationController } from '../modules/cars/useCases/listSpecification'

const specificationRoutes = Router()

specificationRoutes.post('/', (resquest, response) => {
  return createSpecificationController.create(resquest, response)
})

specificationRoutes.get('/', (resquest, response) => {
  return listSpecificationController.list(resquest, response)
})

export { specificationRoutes }
