import { CreateService } from './CreateCategory'
import { CategoryRespository } from '../../repositories/CategoryRepository/implementacions/categoryRespository'
import { CreateCategoriesController } from './createCategoriesController'

const categoryRespository = CategoryRespository.getInstace()
const createCategory = new CreateService(categoryRespository)
const createCategoriesController = new CreateCategoriesController(createCategory)

export { createCategoriesController }
