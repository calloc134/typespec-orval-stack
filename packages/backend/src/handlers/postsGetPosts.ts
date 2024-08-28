import { createFactory } from "hono/factory";
import { zValidator } from "../tyorapi.validator";
import { PostsGetPostsContext } from "../tyorapi.context";
import { postsGetPostsResponse } from "../tyorapi.zod";
import postgres from "postgres";
import { z } from "zod";
import { getPostsUsecase } from "src/features/posts/usecases/postUsecase";
import { convertToPostSchemas } from "src/features/posts/converter/convertToPostSchema";

const factory = createFactory();

export const postsGetPostsHandlers = factory.createHandlers(
  zValidator("response", postsGetPostsResponse),
  async (c: PostsGetPostsContext) => {
    const sql = postgres(
      "postgresql://postgres@localhost:5432/tyorapi-1?sslmode=disable"
    );

    const result = await getPostsUsecase(sql);

    if (result.isErr()) {
      throw new Error(result.error.message);
    }

    const response: z.infer<typeof postsGetPostsResponse> = {
      posts: convertToPostSchemas(result.value),
    };

    return c.json(response);
  }
);
