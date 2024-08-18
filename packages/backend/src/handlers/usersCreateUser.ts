import { createFactory } from "hono/factory";
import { zValidator } from "../tyorapi.validator";
import { UsersCreateUserContext } from "../tyorapi.context";
import { usersCreateUserBody, usersCreateUserResponse } from "../tyorapi.zod";

const factory = createFactory();

export const usersCreateUserHandlers = factory.createHandlers(
  zValidator("json", usersCreateUserBody),
  zValidator("response", usersCreateUserResponse),
  async (c: UsersCreateUserContext) => {
    const raw_request = c.req.valid("json");
  }
);
