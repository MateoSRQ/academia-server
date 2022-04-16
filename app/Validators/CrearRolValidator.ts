import {rules, schema} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CrearRolValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string({}, [
      rules.required(),
      rules.unique({table: 'rol', column: 'nombre'}),
      rules.maxLength(100)
    ]),
    // rol_id: schema.string({}, [
    //   //rules.exists({table: 'rol', column: 'id'}),
    // ]),
  })
  public messages = {
    'nombre.required':  'Se requiere un nombre de rol',
    'nombre.unique':    'Se requiere un nombre de rol distinto',
    'nombre.maxLength': 'Se requiere un nombre de rol con un tamaño menor a 100 caracteres',
    //'rol_id.exists':    'Se requiere un rol padre existente'
  }
}
