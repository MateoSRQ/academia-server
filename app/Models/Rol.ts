import { DateTime } from 'luxon'
import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  public static table = 'rol'

  @column({ isPrimary: true })
  public id: number

  @column({})
  public rol_id:number

  @column({})
  public nombre:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
