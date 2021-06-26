import { Category } from '../../models/category'

export interface ICategoryDTO{
  name: string
  description: string
}

export interface ICategoriesRespository{
  findByName: (name: string) => Category
  list: () => Category[]
  create: ({ name, description }: ICategoryDTO) => void
}
