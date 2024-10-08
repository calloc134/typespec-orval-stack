/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * TypeSpec Orval API
 * OpenAPI spec version: 0.0.0
 */
import { z as zod } from 'zod';

export const helloHelloResponse = zod.object({
  "message": zod.string()
}).strict()


export const postsGetPostsResponse = zod.object({
  "posts": zod.array(zod.object({
  "post_uuid": zod.string(),
  "post_title": zod.string(),
  "post_content": zod.string()
}).strict())
}).strict()


export const postsCreatePostBody = zod.object({
  "post": zod.object({
  "post_title": zod.string(),
  "post_content": zod.string()
})
})

export const postsCreatePostResponse = zod.object({
  "post": zod.object({
  "post_uuid": zod.string(),
  "post_title": zod.string(),
  "post_content": zod.string()
}).strict()
}).strict()


export const postsUpdatePostBody = zod.object({
  "post": zod.object({
  "post_uuid": zod.string(),
  "post_title": zod.string(),
  "post_content": zod.string()
})
})

export const postsUpdatePostResponse = zod.object({
  "post": zod.object({
  "post_uuid": zod.string(),
  "post_title": zod.string(),
  "post_content": zod.string()
}).strict()
}).strict()

