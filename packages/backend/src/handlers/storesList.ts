import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { StoresListContext } from '../petstore.context';
import { storesListQueryParams,
storesListResponse } from '../petstore.zod';

const factory = createFactory();


export const storesListHandlers = factory.createHandlers(
zValidator('query', storesListQueryParams),
zValidator('response', storesListResponse),
async (c: StoresListContext) => {
  
  },
);
