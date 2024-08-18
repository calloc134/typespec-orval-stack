import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { StoresReadContext } from '../petstore.context';
import { storesReadParams,
storesReadResponse } from '../petstore.zod';

const factory = createFactory();


export const storesReadHandlers = factory.createHandlers(
zValidator('param', storesReadParams),
zValidator('response', storesReadResponse),
async (c: StoresReadContext) => {
  
  },
);
