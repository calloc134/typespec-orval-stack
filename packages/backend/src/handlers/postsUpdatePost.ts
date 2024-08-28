import { createFactory } from "hono/factory";
import { zValidator } from "../tyorapi.validator";
import { PostsUpdatePostContext } from "../tyorapi.context";
import { postsUpdatePostBody, postsUpdatePostResponse } from "../tyorapi.zod";
import { convertToPostSchema } from "src/features/posts/converter/convertToPostSchema";
import { updatePostUsecase } from "src/features/posts/usecases/postUsecase";
import postgres from "postgres";
import { z } from "zod";

const factory = createFactory();

export const postsUpdatePostHandlers = factory.createHandlers(
  zValidator("json", postsUpdatePostBody),
  zValidator("response", postsUpdatePostResponse),
  async (c: PostsUpdatePostContext) => {
    const sql = postgres(
      "postgresql://postgres@localhost:5432/tyorapi-1?sslmode=disable"
    );

    const request_post = await c.req.valid("json");

    const result = await updatePostUsecase(sql, request_post.post);

    if (result.isErr()) {
      throw new Error(result.error.message);
    }

    const response: z.infer<typeof postsUpdatePostResponse> = {
      post: convertToPostSchema(result.value),
    };

    return c.json(response);
  }
);
