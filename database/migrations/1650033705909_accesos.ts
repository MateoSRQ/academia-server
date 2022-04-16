import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accesos extends BaseSchema {
  protected tableName = 'acceso'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('recurso_id').unsigned().references('id').inTable('recurso').onDelete('NO ACTION')
      table.integer('rol_id').unsigned().references('id').inTable('rol').onDelete('NO ACTION')
      table.string('nombre', 500).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
