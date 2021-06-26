import { Router } from 'express'
import { createCategoriesController } from '../modules/cars/useCases/createCategories'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

import multer from 'multer'

const categoriesRoutes = Router()
const upoload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', (request, response) => {
  return createCategoriesController.createCategories(request, response)
})

categoriesRoutes.get('/', (resquest, response) => {
  return listCategoriesController.list(resquest, response)
})

categoriesRoutes.post('/import', upoload.single('file'), (request, response) => {
  return importCategoryController.create(request, response)
})

export { categoriesRoutes }
