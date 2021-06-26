import { SpecificationRepository } from '../../repositories/SpecificationRepository/implementacion/SpecificationRepository'
import { CreateSpecification } from './CreateSpecification'
import { CreateSpecificationController } from './createSpecificationController'

const specificationRepository = SpecificationRepository.getInstace()
const createSpecificationService = new CreateSpecification(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationService)

export { createSpecificationController }
