import { createFactory } from 'hono/factory';
import { zValidator } from '../tyorapi.validator';
import { UsersUpdateUserContext } from '../tyorapi.context';
import { usersUpdateUserBody,
usersUpdateUserResponse } from '../tyorapi.zod';

const factory = createFactory();


export const usersUpdateUserHandlers = factory.createHandlers(
zValidator('json', usersUpdateUserBody),
zValidator('response', usersUpdateUserResponse),
async (c: UsersUpdateUserContext) => {
  
  },
);
