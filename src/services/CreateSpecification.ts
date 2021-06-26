import { ISpecificationRepositoryDTO, ISpecificationRepository } from '../repositories/SpecificationRepository/ISpecificationRepository'

class CreateSpecification {
  constructor (private readonly specificationyRespository: ISpecificationRepository) {}

  execute ({ name, description }: ISpecificationRepositoryDTO): void {
    this.specificationyRespository.create({ name, description })
  }
}

export { CreateSpecification }
