import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Alumno extends BaseModel {
  public static table = 'alumno'

  @column({isPrimary: true})
  public id: number

  @column()
  public codigo: string

  @column()
  public persona_id: number

  @column()
  public proceso_admision_id: number

  @column()
  public estado: string

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
