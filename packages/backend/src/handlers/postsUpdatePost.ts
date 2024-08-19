import { createFactory } from 'hono/factory';
import { zValidator } from '../tyorapi.validator';
import { PostsUpdatePostContext } from '../tyorapi.context';
import { postsUpdatePostBody,
postsUpdatePostResponse } from '../tyorapi.zod';

const factory = createFactory();


export const postsUpdatePostHandlers = factory.createHandlers(
zValidator('json', postsUpdatePostBody),
zValidator('response', postsUpdatePostResponse),
async (c: PostsUpdatePostContext) => {
  
  },
);
