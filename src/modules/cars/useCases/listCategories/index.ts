import { ListCategoriesController } from './listCategoriesController'
import { CategoryRespository } from '../../repositories/CategoryRepository/implementacions/categoryRespository'

const categoryRespository = CategoryRespository.getInstace()
const listCategoriesController = new ListCategoriesController(categoryRespository)

export { listCategoriesController }
