import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rol from 'App/Models/Rol';
import CrearRolValidator from 'App/Validators/CrearRolValidator'


export default class RolsController {
  public async index(ctx: HttpContextContract) {
    try {
      const roles = await Rol.all()
      return ctx.response.status(200).send(roles)
    }
    catch (ex) {
      return ctx.response.status(500).send({message: ex.message})
    }
  }

  public async store(ctx: HttpContextContract) {
    const payload: any = await ctx.request.validate(CrearRolValidator);
    if (payload && payload.errors) {
      return ctx.response.status(400).send({message: payload})
    }
    else {
      try {
        const rol = await Rol.create({
          ...ctx.request.body()
        })
        return ctx.response.status(200).send(rol)
      } catch (ex) {
        return ctx.response.status(500).send({message: ex.message})
      }
    }
  }
}
