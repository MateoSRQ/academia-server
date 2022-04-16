import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Hash from "@ioc:Adonis/Core/Hash";
//import {column} from "@ioc:Adonis/Lucid/Orm";
//import {DateTime} from "luxon";

export default class CrearUsuarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    username: schema.string({}, [
      rules.required(),
      rules.unique({table: 'usuario', column: 'username'})
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({table: 'usuario', column: 'email'})
    ]),
    password: schema.string({}, [
      rules.required(),
    ]),
    rememberMe: schema.string.nullableAndOptional(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    'username.required':  'Se requiere un nombre de usuario',
    'username.unique':    'Se requiere un nombre de usuario distinto',
    'email.required':     'Se requiere un correo electrónico',
    'email.email':        'Se requiere un correo electrónico válido',
    'email.unique':       'Se requiere un correo electrónico distinto',
    'password.required':  'Se requiere una contraseña',

  }
}
