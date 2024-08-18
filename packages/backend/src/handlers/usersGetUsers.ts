import { createFactory } from 'hono/factory';
import { zValidator } from '../tyorapi.validator';
import { UsersGetUsersContext } from '../tyorapi.context';
import { usersGetUsersResponse } from '../tyorapi.zod';

const factory = createFactory();


export const usersGetUsersHandlers = factory.createHandlers(
zValidator('response', usersGetUsersResponse),
async (c: UsersGetUsersContext) => {
  
  },
);
