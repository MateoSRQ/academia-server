import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario';
import CrearUsuarioValidator from 'App/Validators/CrearUsuarioValidator'

export default class UsuariosController {
  public async index(ctx: HttpContextContract) {
    try {
      const usuarios = await Usuario.all()
      return ctx.response.status(200).send(usuarios)
    }
    catch (ex) {
      return ctx.response.status(500).send({message: ex.message})
    }
  }

  public async store(ctx: HttpContextContract) {
    const payload: any = await ctx.request.validate(CrearUsuarioValidator);
    if (payload && payload.errors) {
      return ctx.response.status(400).send({message: payload})
    }
    else {
      try {
        const usuario = await Usuario.create({
          ...ctx.request.body()
        })
        return ctx.response.status(200).send(usuario)
      } catch (ex) {
        return ctx.response.status(500).send({message: ex.message})
      }
    }
  }
}
