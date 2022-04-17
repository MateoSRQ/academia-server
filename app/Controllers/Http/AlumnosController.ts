// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Alumno from "App/Models/Alumno";
import Persona from "App/Models/Persona";

export default class AlumnosController {
  public async index(ctx: HttpContextContract) {
    try {
      //const usuarios = await Usuario.all()
      //return ctx.response.status(200).send(usuarios)
    }
    catch (ex) {
      return ctx.response.status(500).send({message: ex.message})
    }
  }
}
