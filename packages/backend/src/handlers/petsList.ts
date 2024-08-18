import { createFactory } from "hono/factory";
import { zValidator } from "../petstore.validator";
import { PetsListContext } from "../petstore.context";
import { petsListQueryParams, petsListResponse } from "../petstore.zod";

const factory = createFactory();

export const petsListHandlers = factory.createHandlers(
  zValidator("query", petsListQueryParams),
  zValidator("response", petsListResponse),
  async (c: PetsListContext) => {}
);
