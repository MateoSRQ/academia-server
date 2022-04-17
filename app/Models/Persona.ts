import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Persona extends BaseModel {
  public static table = 'persona'

  @column({ isPrimary: true })
  public id: number

  @column()
  public codigo: string

  @column()
  public nombres: string

  @column()
  public apellido_paterno: string

  @column()
  public apellido_materno: string

  @column()
  public documento_tipo: string

  @column()
  public documento_numero: string

  @column()
  public correo_electronico_1: string

  @column()
  public correo_electronico_2: string

  @column()
  public telefono_1: string

  @column()
  public telefono_2: string

  @column()
  public direccion: string

  @column()
  public ubigeo: string

  @column.date()
  public fecha_nacimiento: DateTime

  @column()
  public pais_nacimiento: string

  @column()
  public region_nacimiento: string

  @column()
  public ciudad_nacimiento: string

  @column()
  public estado: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
