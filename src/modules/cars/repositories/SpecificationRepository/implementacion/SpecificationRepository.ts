import { ISpecificationRepository, ISpecificationRepositoryDTO } from '../ISpecificationRepository'
import { Specification } from '../../../models/Specification'

class SpecificationRepository implements ISpecificationRepository {
  private readonly specificationData: Specification[]

  constructor () {
    this.specificationData = []
  }

  create ({ name, description }: ISpecificationRepositoryDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specificationData.push(specification)
  }

  list (): ISpecificationRepositoryDTO[] {
    return this.specificationData
  }
}

export { SpecificationRepository }
