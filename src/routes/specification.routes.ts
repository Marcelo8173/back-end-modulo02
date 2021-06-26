import { Router } from 'express'
import { createCategoriesController } from '../modules/cars/useCases/createCategories'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository/implementacion/SpecificationRepository'

const specificationRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationRoutes.post('/', (resquest, response) => {
  return createCategoriesController.createCategories(resquest, response)
})

specificationRoutes.get('/', (resquest, response) => {
  const responseData = specificationRepository.list()

  return response.status(201).json(responseData)
})

export { specificationRoutes }
