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
import { postsGetPostsHandlers } from './handlers/postsGetPosts';
import { postsCreatePostHandlers } from './handlers/postsCreatePost';
import { postsUpdatePostHandlers } from './handlers/postsUpdatePost';


const app = new Hono()


app.get('/',...helloHelloHandlers)



app.get('/posts',...postsGetPostsHandlers)



app.post('/posts',...postsCreatePostHandlers)



app.put('/posts',...postsUpdatePostHandlers)


export default app