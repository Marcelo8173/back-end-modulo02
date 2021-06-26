import { Category } from '../../../models/category'
import { ICategoriesRespository, ICategoryDTO } from '../ICategoryRespositorie'

class CategoryRespository implements ICategoriesRespository {
  private readonly categories: Category[]

  private static INSTACE: CategoryRespository

  private constructor () {
    this.categories = []
  }

  public static getInstace (): CategoryRespository {
    if (!CategoryRespository.INSTACE) {
      CategoryRespository.INSTACE = new CategoryRespository()
    }

    return CategoryRespository.INSTACE
  }

  create ({ name, description }: ICategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
    console.log('categoriesCreate', this.categories)
  }

  list (): Category[] {
    return this.categories
  }

  findByName (name: string): Category {
    const existCategory = this.categories.find(item => item.name === name)
    return existCategory
  }
}

export { CategoryRespository }
