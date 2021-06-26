import { ICategoriesRespository } from '../modules/repositories/CategoryRepository/ICategoryRespositorie'

interface IRequest{
  name: string
  description: string
}

// definir o retorno
// alterar o retorno de erro
// acesso ao repositorio
// retornar alguma coisa?

class CreateService {
  constructor (private readonly categoryRespository: ICategoriesRespository) {}

  execute ({ description, name }: IRequest): void {
    const alredyExist = this.categoryRespository.findByName(name)

    if (alredyExist) {
      throw new Error('Category alredy exist')
    }

    this.categoryRespository.create({ name, description })
  }
}

export { CreateService }
