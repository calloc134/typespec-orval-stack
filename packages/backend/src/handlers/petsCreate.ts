import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetsCreateContext } from '../petstore.context';
import { petsCreateBody,
petsCreateResponse } from '../petstore.zod';

const factory = createFactory();


export const petsCreateHandlers = factory.createHandlers(
zValidator('json', petsCreateBody),
zValidator('response', petsCreateResponse),
async (c: PetsCreateContext) => {
  
  },
);
