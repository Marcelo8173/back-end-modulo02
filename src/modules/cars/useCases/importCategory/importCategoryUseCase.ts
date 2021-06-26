/* eslint-disable array-callback-return */
import fileSystem from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRespository } from '../../repositories/CategoryRepository/ICategoryRespositorie'

interface IImportCategory {
  name: string
  description: string
}
class ImportCategoryUseCase {
  constructor (private readonly categoryResposity: ICategoriesRespository) {}

  async loadCategory (file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fileSystem.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = csvParse()
      stream.pipe(parseFile)

      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({
          name,
          description
        })
      })
        .on('end', () => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          fileSystem.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute (file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file)

    categories.map(item => {
      const { name, description } = item

      const existCategory = this.categoryResposity.findByName(name)

      if (!existCategory) {
        this.categoryResposity.create({
          name,
          description
        })
      }
    })
  }
}

export { ImportCategoryUseCase }
