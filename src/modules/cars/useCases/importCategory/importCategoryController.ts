import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './importCategoryUseCase'

class ImportCategoryController {
  constructor (private readonly importCategoryUseCase: ImportCategoryUseCase) {}
  create (request: Request, response: Response): Response {
    const { file } = request

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.importCategoryUseCase.execute(file)

    return response.send()
  }
}

export { ImportCategoryController }
