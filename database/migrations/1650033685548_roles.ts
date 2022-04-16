import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Roles extends BaseSchema {
  protected tableName = 'rol'

  public async up () {
    try {

      this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.integer('rol_id').unsigned().references('id').inTable('rol').onDelete('NO ACTION').nullable()
        table.string('nombre', 100).unique().notNullable()
        table.timestamp('created_at', {useTz: true})
        table.timestamp('updated_at', {useTz: true})
      })

      /*
      this.schema.alterTable(this.tableName, (table) => {

      })

       */


    } catch (e) {
      console.log(e)
    }
  }


  public async down () {
    this.schema.dropTable(this.tableName)
  }

}
