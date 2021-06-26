export interface ISpecificationRepositoryDTO{
  name: string
  description: string
}

export interface ISpecificationRepository{
  create: ({ name, description }: ISpecificationRepositoryDTO) => void
  list: () => ISpecificationRepositoryDTO[]
}
