import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recursos extends BaseSchema {
  protected tableName = 'recurso'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('recurso_id').unsigned().references('id').inTable('recurso').onDelete('NO ACTION').nullable()
      table.string('nombre', 100).unique().notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
