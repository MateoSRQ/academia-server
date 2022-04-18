/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Usuarios
Route.get('/api/v1/usuarios', 'UsuariosController.index');
Route.post('/api/v1/usuarios', 'UsuariosController.store');

// Roles
Route.get('/api/v1/roles', 'RolsController.index');
Route.post('/api/v1/roles', 'RolsController.store');

// Auth
Route.post('/api/v1/login', 'AuthController.login');
Route.post('/api/v1/get_token', 'AuthController.getToken');

// ProcesoAdmision
Route.get('/api/v1/admisiones', 'ProcesoAdmisionsController.index');
Route.post('/api/v1/admisiones', 'ProcesoAdmisionsController.store');

// Alumno
Route.get('/api/v1/alumnos', 'AlumnosController.index');
Route.post('/api/v1/alumnos', 'AlumnosController.store');

