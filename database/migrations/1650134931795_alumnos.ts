import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Alumnos extends BaseSchema {
  protected tableName = 'alumno'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo', 12).notNullable().unique()
      table.integer('persona_id').unsigned().references('id').inTable('persona').notNullable()
      table.integer('proceso_admision_id').unsigned().references('id').inTable('proceso_admision').notNullable()
      table.string('estado', 1).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
