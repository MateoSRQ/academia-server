// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { AuthConfig } from '@ioc:Adonis/Addons/Auth'
// import Usuario from 'App/Models/Usuario';
// import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
// import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({auth, request, response}) {
    try {
      const username = request.input('username')
      const password = request.input('password')
      const response = await auth.use('web').attempt(username, password)
      return response.status(200).send(response)
    }
    catch (ex) {
      return response.status(500).send({message: ex.message})
    }
  }

  public async getToken({auth, request, response}) {
    try {
      const username = request.input('username')
      const password = request.input('password')
      const token = await auth.use('api').attempt(username, password)
      return response.status(200).send(token)
    }
    catch (ex) {
      //return response.status(500).send({message: ex.message})
      return response.status(500).send({message: 'error'})
    }
  }

}
