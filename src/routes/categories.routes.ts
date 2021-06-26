import { Router } from 'express'
import { createCategoriesController } from '../modules/cars/useCases/createCategories'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
  return createCategoriesController.createCategories(request, response)
})

categoriesRoutes.get('/', (resquest, response) => {
  return listCategoriesController.list(resquest, response)
})

export { categoriesRoutes }
