import { Category } from '../../../models/category'
import { ICategoriesRespository, ICategoryDTO } from '../ICategoryRespositorie'

class PostgresCategoryRepositorie implements ICategoriesRespository {
  findByName (name: string): Category {
    return null
  }

  list (): Category[] {
    return null
  }

  create ({ name, description }: ICategoryDTO): void {
    console.log(name, description)
  }
}

export { PostgresCategoryRepositorie }
