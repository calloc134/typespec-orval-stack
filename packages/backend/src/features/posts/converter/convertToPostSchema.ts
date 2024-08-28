import { Post } from "../models/Post";
import { Post as PostSchema } from "src/tyorapi.schemas";

export const convertToPostSchema = (post: Post): PostSchema => {
  return {
    post_uuid: post.post_uuid.value,
    post_title: post.post_title.value,
    post_content: post.post_content.value,
  };
};

export const convertToPostSchemas = (posts: Post[]) => {
  return posts.map((post) => convertToPostSchema(post));
};
