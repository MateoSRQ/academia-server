import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import ProcesoAdmision from "App/Models/ProcesoAdmision";
import CrearProcesoAdmisionValidator from "App/Validators/CrearProcesoAdmisionValidator";

export default class ProcesoAdmisionsController {
  public async index(ctx: HttpContextContract) {
    try {
      const procesos = await ProcesoAdmision.all()
      return ctx.response.status(200).send(procesos)
    }
    catch (ex) {
      return ctx.response.status(500).send({message: ex.message})
    }
  }

  public async store(ctx: HttpContextContract) {
    const payload: any = await ctx.request.validate(CrearProcesoAdmisionValidator);
    if (payload && payload.errors) {
      return ctx.response.status(400).send({message: payload})
    }
    else {
      try {
        const proceso = await ProcesoAdmision.create({
          ...ctx.request.body()
        })
        return ctx.response.status(200).send(proceso)
      } catch (ex) {
        return ctx.response.status(500).send({message: ex.message})
      }
    }
  }
}
