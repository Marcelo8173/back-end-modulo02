import { getRepository, Repository } from 'typeorm'
import { Category } from '../../../models/category'
import { ICategoriesRespository, ICategoryDTO } from '../ICategoryRespositorie'

class CategoryRespository implements ICategoriesRespository {
  // private readonly categories: Category[]

  private static INSTACE: CategoryRespository
  private readonly repository: Repository<Category>

  private constructor () {
    this.repository = getRepository(Category)
  }

  public static getInstace (): CategoryRespository {
    if (!CategoryRespository.INSTACE) {
      CategoryRespository.INSTACE = new CategoryRespository()
    }

    return CategoryRespository.INSTACE
  }

  async create ({ name, description }: ICategoryDTO): Promise<void> {
    await this.repository.query(`
      insert into categories (name,description)
    values(${name},${description})`)
  }

  async list (): Promise<Category[]> {
    const categories = await this.repository.query('select * from categories')
    return categories
  }

  async findByName (name: string): Promise<Category> {
    const existCategory = this.repository.query(`
      select * from categories where name = ${name}
    `)
    return existCategory
  }
}

export { CategoryRespository }
