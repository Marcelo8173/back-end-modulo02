import { Router } from 'express'
import { CreateSpecification } from '../services/CreateSpecification'
import { SpecificationRepository } from '../repositories/SpecificationRepository/SpecificationRepository'

const specificationRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationRoutes.post('/', (resquest, response) => {
  const { name, description } = resquest.body

  const createSpecification = new CreateSpecification(specificationRepository)
  createSpecification.execute({ name, description })

  return response.status(201).send()
})

specificationRoutes.get('/', (resquest, response) => {
  const responseData = specificationRepository.list()

  return response.status(201).json(responseData)
})

export { specificationRoutes }
