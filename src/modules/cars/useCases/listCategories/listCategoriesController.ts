import { Request, Response } from 'express'
import { CategoryRespository } from '../../repositories/CategoryRepository/implementacions/categoryRespository'

class ListCategoriesController {
  constructor (private readonly categoryRespository: CategoryRespository) {}

  list (request: Request, response: Response): Response {
    const responseData = this.categoryRespository.list()
    console.log('responseData', responseData)
    return response.status(200).json(responseData)
  }
}

export { ListCategoriesController }
