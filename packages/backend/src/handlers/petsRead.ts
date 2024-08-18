import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetsReadContext } from '../petstore.context';
import { petsReadParams,
petsReadResponse } from '../petstore.zod';

const factory = createFactory();


export const petsReadHandlers = factory.createHandlers(
zValidator('param', petsReadParams),
zValidator('response', petsReadResponse),
async (c: PetsReadContext) => {
  
  },
);
