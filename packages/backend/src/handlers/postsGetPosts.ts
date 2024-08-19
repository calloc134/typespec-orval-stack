import { createFactory } from 'hono/factory';
import { zValidator } from '../tyorapi.validator';
import { PostsGetPostsContext } from '../tyorapi.context';
import { postsGetPostsResponse } from '../tyorapi.zod';

const factory = createFactory();


export const postsGetPostsHandlers = factory.createHandlers(
zValidator('response', postsGetPostsResponse),
async (c: PostsGetPostsContext) => {
  
  },
);
