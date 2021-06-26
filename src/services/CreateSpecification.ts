import { ISpecificationRepositoryDTO, ISpecificationRepository } from '../modules/repositories/SpecificationRepository/ISpecificationRepository'

class CreateSpecification {
  constructor (private readonly specificationyRespository: ISpecificationRepository) {}

  execute ({ name, description }: ISpecificationRepositoryDTO): void {
    this.specificationyRespository.create({ name, description })
  }
}

export { CreateSpecification }
