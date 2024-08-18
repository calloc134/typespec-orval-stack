import { createFactory } from "hono/factory";
import { zValidator } from "../tyorapi.validator";
import { HelloHelloContext } from "../tyorapi.context";
import { helloHelloResponse } from "../tyorapi.zod";
import { z } from "zod";

const factory = createFactory();

export const helloHelloHandlers = factory.createHandlers(
  zValidator("response", helloHelloResponse),
  async (c: HelloHelloContext) => {
    const response: z.infer<typeof helloHelloResponse> = {
      message: "Hello, World!",
    };

    return c.json(response);
  }
);
