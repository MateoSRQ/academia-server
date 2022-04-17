import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Personas extends BaseSchema {
  protected tableName = 'persona'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo', 12).notNullable().unique()
      table.string('nombres', 100).notNullable()
      table.string('apellido_paterno', 100).notNullable()
      table.string('apellido_materno', 100).notNullable()
      table.string('documento_tipo', 100).notNullable()
      table.string('documento_nro', 100).notNullable().unique()
      table.string('correo_electronico_1', 100).notNullable().unique()
      table.string('correo_electronico_2', 100).unique()
      table.string('telefono_1', 100).notNullable()
      table.string('telefono_2', 100)
      table.string('direccion', 100).notNullable()
      table.string('ubigeo', 6)
      table.string('pais_nacimiento', 100).notNullable()
      table.string('region_nacimiento', 100).notNullable()
      table.string('ciudad_nacimiento', 100).notNullable()
      table.date('fecha_nacimiento').notNullable()
      table.string('estado', 1).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
