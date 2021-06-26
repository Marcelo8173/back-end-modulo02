import { Request, Response } from 'express'
import { CreateService } from './CreateCategory'

class CreateCategoriesController {
  constructor (private readonly createService: CreateService) {}

  createCategories (resquest: Request, response: Response): Response {
    const { name, description } = resquest.body

    this.createService.execute({ name, description })

    return response.status(201).send()
  }
}

export { CreateCategoriesController }
