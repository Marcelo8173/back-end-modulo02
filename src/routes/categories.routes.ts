import { Router } from 'express'
import { CategoryRespository } from '../modules/repositories/CategoryRepository/categoryRespository'
import { CreateService } from '../services/CreateService'

const categoriesRoutes = Router()
const categoryRespository = new CategoryRespository()

categoriesRoutes.post('/', (resquest, response) => {
  const { name, description } = resquest.body

  const createCategoryService = new CreateService(categoryRespository)
  createCategoryService.execute({ name, description })

  return response.status(201).send()
})

categoriesRoutes.get('/', (resquest, response) => {
  const responseData = categoryRespository.list()

  return response.status(201).json(responseData)
})

export { categoriesRoutes }
