import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProcesoAdmisions extends BaseSchema {
  protected tableName = 'proceso_admision'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo', 12).notNullable().unique()
      table.string('nombre', 100).notNullable().unique()
      table.date('fecha_inicio').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
