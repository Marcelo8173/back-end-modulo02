import { ListCategoriesController } from './listCategoriesController'
import { CategoryRespository } from '../../repositories/CategoryRepository/categoryRespository'

const categoryRespository = new CategoryRespository()
const listCategoriesController = new ListCategoriesController(categoryRespository)

export { listCategoriesController }
