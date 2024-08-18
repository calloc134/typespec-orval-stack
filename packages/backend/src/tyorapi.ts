/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * TypeSpec Orval API
 * OpenAPI spec version: 0.0.0
 */
import {
  Hono
} from 'hono'

import { helloHelloHandlers } from './handlers/helloHello';
import { usersGetUsersHandlers } from './handlers/usersGetUsers';
import { usersCreateUserHandlers } from './handlers/usersCreateUser';
import { usersUpdateUserHandlers } from './handlers/usersUpdateUser';


const app = new Hono()


app.get('/',...helloHelloHandlers)



app.get('/users',...usersGetUsersHandlers)



app.post('/users',...usersCreateUserHandlers)



app.patch('/users',...usersUpdateUserHandlers)


export default app