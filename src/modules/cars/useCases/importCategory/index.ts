
import { CategoryRespository } from '../../repositories/CategoryRepository/implementacions/categoryRespository'
import { ImportCategoryController } from './importCategoryController'
import { ImportCategoryUseCase } from './importCategoryUseCase'

const categoryRespository = CategoryRespository.getInstace()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRespository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }
