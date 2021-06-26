import { Request, Response } from 'express'
import { CreateSpecification } from './CreateSpecification'

class CreateSpecificationController {
  constructor (private readonly createSpecification: CreateSpecification) {}

  create (request: Request, response: Response): Response {
    const { name, description } = request.body

    this.createSpecification.execute({ name, description })

    return response.status(201).send()
  }
}

export { CreateSpecificationController }
