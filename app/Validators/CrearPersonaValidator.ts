import {rules, schema} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CrearPersonaValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    codigo: schema.string({}, [
      rules.required(),
      rules.unique({table: 'persona', column: 'codigo'}),
      rules.maxLength(12)
    ]),
    nombres: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    apellido_paterno: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    apellido_materno: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    documento_tipo: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    documento_nro: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    correo_electronico_1: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    correo_electronico_2: schema.string({}, [
      rules.maxLength(100)
    ]),
    telefono_1: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    telefono_2: schema.string({}, [
      rules.maxLength(100)
    ]),
    direccion: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    ubigeo: schema.string({}, [
      rules.maxLength(6)
    ]),
    pais_nacimiento: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    region_nacimiento: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    ciudad_nacimiento: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    fecha_nacimiento: schema.date({}, [
      rules.required()
    ]),
    estado: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ])
  })
  public messages = {}
}
