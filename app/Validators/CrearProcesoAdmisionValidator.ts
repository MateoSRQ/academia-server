import {rules, schema} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CrearProcesoAdmisionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    codigo: schema.string({}, [
      rules.required(),
      rules.unique({table: 'proceso_admision', column: 'codigo'}),
      rules.maxLength(12)
    ]),
    nombre: schema.string({}, [
      rules.required(),
      rules.unique({table: 'proceso_admision', column: 'nombre'}),
      rules.maxLength(100)
    ]),
    fecha_inicio: schema.date({}, [
      rules.required(),
      rules.afterOrEqual("today")
    ]),
  })
  public messages = {
    'codigo.required':                    'Se requiere un código de proceso de admisión',
    'codigo.unique':                      'Se requiere un código de proceso de admisión distinto',
    'codigo.maxLength':                   'Se requiere un código de un tamaño menor o igual a 12 caracteres',
    'nombre.required':                    'Se requiere un nombre de proceso de admisión',
    'nombre.unique':                      'Se requiere un nombre de proceso de admisión distinto',
    'nombre.maxLength':                   'Se requiere un nombre de un tamaño menor o igual a 100 caracteres',
    'fecha_inicio.required':              'Se requiere una fecha de inicio de proceso de admisión',
    'fecha_inicio.afterOrEqual':          'Se requiere una fecha de inicio igual o posterior a hoy',

  }
}
