import { createFactory } from "hono/factory";
import { zValidator } from "../tyorapi.validator";
import { PostsCreatePostContext } from "../tyorapi.context";
import { postsCreatePostBody, postsCreatePostResponse } from "../tyorapi.zod";
import { createPostUsecase } from "src/features/posts/usecases/postUsecase";
import { convertToPostSchema } from "src/features/posts/converter/convertToPostSchema";
import postgres from "postgres";
import { z } from "zod";

const factory = createFactory();

export const postsCreatePostHandlers = factory.createHandlers(
  zValidator("json", postsCreatePostBody),
  zValidator("response", postsCreatePostResponse),
  async (c: PostsCreatePostContext) => {
    const sql = postgres(
      "postgresql://postgres@localhost:5432/tyorapi-1?sslmode=disable"
    );

    const request_post = await c.req.valid("json");

    const result = await createPostUsecase(sql, request_post.post);

    if (result.isErr()) {
      throw new Error(result.error.message);
    }

    const response: z.infer<typeof postsCreatePostResponse> = {
      post: convertToPostSchema(result.value),
    };

    return c.json(response);
  }
);
