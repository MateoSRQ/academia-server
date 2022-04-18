// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Alumno from "App/Models/Alumno";
import Persona from "App/Models/Persona";
import CrearPersonaValidator from "App/Validators/CrearPersonaValidator";
import CrearAlumnoPersonaValidator from "App/Validators/CrearAlumnoPersonaValidator";
import { validator } from '@ioc:Adonis/Core/Validator'
import ProcesoAdmision from "App/Models/ProcesoAdmision";
import Database from '@ioc:Adonis/Lucid/Database'

export default class AlumnosController {
  public async index(ctx: HttpContextContract) {
    try {
      const alumnos = await Alumno.all()
      return ctx.response.status(200).send(alumnos)
    }
    catch (ex) {
      return ctx.response.status(500).send({message: ex.message})
    }
  }

  public async store(ctx: HttpContextContract) {
    try {
      await validator.validate({
        schema: new CrearPersonaValidator().schema,
        messages: new CrearPersonaValidator().messages,
        data: ctx.request.body().persona
      })
      await validator.validate({
        schema: new CrearAlumnoPersonaValidator().schema,
        messages: new CrearAlumnoPersonaValidator().messages,
        data: ctx.request.body()
      })
      // Save
      await Database.transaction(async (trx) => {
        try {
          const persona = new Persona()
          persona.fill(ctx.request.body().persona)
          persona.useTransaction(trx)
          await persona.save()
          const alumno = new Alumno()

          let alumnoData = ctx.request.body()
          delete alumnoData.persona
          alumno.fill(alumnoData)
          alumno.persona_id = persona.id
          console.log(alumno)
          alumno.useTransaction(trx)
          await alumno.save()
          trx.commit()
        }
        catch (ex) {
          console.log(ex)
          trx.rollback()
        }
      })
    }
    catch (ex) {
      console.log(ex)
    }
  }
}
