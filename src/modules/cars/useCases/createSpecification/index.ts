import { SpecificationRepository } from '../../repositories/SpecificationRepository/implementacion/SpecificationRepository'
import { CreateSpecification } from './CreateSpecification'
import { CreateSpecificationController } from './createSpecificationController'

const specifiationRepository = new SpecificationRepository()
const createSpecificationService = new CreateSpecification(specifiationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationService)

export { createSpecificationController }
