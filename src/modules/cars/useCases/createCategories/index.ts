import { CreateService } from './CreateCategory'
import { CategoryRespository } from '../../repositories/CategoryRepository/categoryRespository'
import { CreateCategoriesController } from './createCategoriesController'

const categoryRespository = new CategoryRespository()
const createCategory = new CreateService(categoryRespository)
const createCategoriesController = new CreateCategoriesController(createCategory)

export { createCategoriesController }
