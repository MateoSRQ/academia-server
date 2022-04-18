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
      rules.unique({table: 'persona', column: 'documento_nro'}),
      rules.maxLength(100)
    ]),
    correo_electronico_1: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.maxLength(100)
    ]),
    correo_electronico_2: schema.string.optional({}, [
      rules.email(),
      rules.maxLength(100)
    ]),
    telefono_1: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    telefono_2: schema.string.optional({}, [
      rules.maxLength(100)
    ]),
    direccion: schema.string({}, [
      rules.required(),
      rules.maxLength(100)
    ]),
    ubigeo: schema.string.optional({}, [
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
      rules.maxLength(1)
    ])
  })
  public messages = {
    'codigo.required':                  'Se requiere un código de persona',
    'codigo.unique':                    'Se requiere un código de persona distinto',
    'codigo.maxLength':                 'Se requiere un código de persona de tamaño menor o igual a 12 caracteres',
    'nombres.required':                 'Se requiere los nombres de la persona',
    'nombres.maxLength'         :       'Se requiere nombres de persona de tamaño menor o igual a 100 caracteres',
    'apellido_paterno.required':        'Se requiere el apellido paterno de la persona',
    'apellido_paterno.maxLength':       'Se requiere el apellido paterno de la persona de tamaño menor o igual a 100 caracteres',
    'apellido_materno.required':        'Se requiere el apellido materno de la persona',
    'apellido_materno.maxLength':       'Se requiere el apellido materno de la persona de tamaño menor o igual a 100 caracteres',
    'documento_tipo.required':          'Se requiere el tipo de documento de la persona',
    'documento_tipo.maxLength':         'Se requiere el tipo de documento de la persona de tamaño menor o igual a 100 caracteres',
    'documento_nro.required':           'Se requiere el número/código de documento de la persona',
    'documento_nro.unique':             'Se requiere el número/código único de documento de la persona',
    'documento_nro.maxLength':          'Se requiere el número/código de documento de la persona de tamaño menor o igual a 100 caracteres',
    'correo_electronico_1.required':    'Se requiere el correo electrónico de la persona',
    'correo_electronico_1.unique':      'Se requiere un correo electrónico de la persona distinto',
    'correo_electronico_1.email':       'Se requiere un correo electrónico válido de la persona',
    'correo_electronico_1.maxLength':   'Se requiere el correo electrónico de la persona de tamaño menor o igual a 100 caracteres',
    'correo_electronico_2.email':       'Se requiere un correo electrónico válido de la persona',
    'correo_electronico_2.maxLength':   'Se requiere el correo electrónico de la persona de tamaño menor o igual a 100 caracteres',
    'telefono_1.required':              'Se requiere el número de teléfono de la persona',
    'telefono_1.maxLength':             'Se requiere el número de teléfono de la persona de tamaño menor o igual a 100 caracteres',
    'telefono_2.maxLength':             'Se requiere el número de teléfono de la persona de tamaño menor o igual a 100 caracteres',
    'direccion.required':               'Se requiere el número de teléfono de la persona',
    'direccion.maxLength':              'Se requiere el número de teléfono de la persona de tamaño menor o igual a 100 caracteres',
    'ubigeo.maxLength':                 'Se requiere el número de ubigeo de la persona de tamaño menor o igual a 6 caracteres',
    'pais_nacimiento.required':         'Se requiere el nombre de país de nacimiento de la persona',
    'pais_nacimiento.maxLength':        'Se requiere el número de país de nacimiento de la persona de tamaño menor o igual a 100 caracteres',
    'region_nacimiento.required':       'Se requiere el número de región de nacimiento de la persona',
    'region_nacimiento.maxLength':      'Se requiere el número de región de nacimiento de la persona de tamaño menor o igual a 100 caracteres',
    'ciudad_nacimiento.required':       'Se requiere el número de ciudad de nacimiento de la persona',
    'ciudad_nacimiento.maxLength':      'Se requiere el número de ciudad de nacimiento de la persona de tamaño menor o igual a 100 caracteres',
    'fecha_nacimiento.required':        'Se requiere la fecha de nacimiento de la persona',
    'estado.required':                  'Se requiere el estado de la persona',
    'estado.maxLength':                 'Se requiere el estado de la persona de tamaño menor o igual a 1 caracter',
  }
}
