import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCategoris1625093732861 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'categories',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              isNullable: false
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'description',
              type: 'varchar',
              isPrimary: true,
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        }
      )
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories')
  }
}
