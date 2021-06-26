import { ListSpecificationController } from './listSpecificationController'
import { SpecificationRepository } from '../../repositories/SpecificationRepository/implementacion/SpecificationRepository'

const specificationRepository = SpecificationRepository.getInstace()
const listSpecificationController = new ListSpecificationController(specificationRepository)

export { listSpecificationController }
