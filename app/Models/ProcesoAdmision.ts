import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProcesoAdmision extends BaseModel {
  public static table = 'proceso_admision'

  @column({ isPrimary: true })
  public id: number

  @column({})
  public codigo:string

  @column({})
  public nombre:string

  @column({})
  public fecha_inicio:Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
