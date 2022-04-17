import {rules, schema} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CrearAlumnoValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    codigo: schema.string({}, [
      rules.required(),
      rules.unique({table: 'alumno', column: 'codigo'}),
      rules.maxLength(12)
    ]),
    persona_id: schema.string({}, [
      rules.required(),
      rules.exists({table: 'persona', column: 'id'})
    ]),
    proceso_admision_id: schema.string({}, [
      rules.required(),
      rules.exists({table: 'proceso_admision', column: 'id'})
    ]),
    estado: schema.string({}, [
      rules.required(),
      rules.maxLength(1)
    ]),
  })
  public messages = {}
}
