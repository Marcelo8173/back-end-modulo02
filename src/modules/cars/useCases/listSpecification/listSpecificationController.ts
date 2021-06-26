import { Request, Response } from 'express'
import { SpecificationRepository } from '../../repositories/SpecificationRepository/implementacion//SpecificationRepository'

class ListSpecificationController {
  constructor (private readonly specificationRepository: SpecificationRepository) {}

  list (resquest: Request, response: Response): Response {
    const responseData = this.specificationRepository.list()

    return response.status(201).json(responseData)
  }
}

export { ListSpecificationController }
