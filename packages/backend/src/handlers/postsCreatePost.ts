import { createFactory } from 'hono/factory';
import { zValidator } from '../tyorapi.validator';
import { PostsCreatePostContext } from '../tyorapi.context';
import { postsCreatePostBody,
postsCreatePostResponse } from '../tyorapi.zod';

const factory = createFactory();


export const postsCreatePostHandlers = factory.createHandlers(
zValidator('json', postsCreatePostBody),
zValidator('response', postsCreatePostResponse),
async (c: PostsCreatePostContext) => {
  
  },
);
