import { Category } from '../../models/category'

export interface ICategoryDTO{
  name: string
  description: string
}

export interface ICategoriesRespository{
  findByName: (name: string) => Promise<Category>
  list: () => Promise<Category[]>
  create: ({ name, description }: ICategoryDTO) => Promise<void>
}
