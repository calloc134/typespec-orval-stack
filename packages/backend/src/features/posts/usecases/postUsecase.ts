import { err, Result } from "neverthrow";
import { createPost, newPost, Post } from "../models/Post";
import { Sql } from "postgres";
import {
  createPostRepository,
  getPostByUuidRepository,
  getPostsRepository,
  updatePostRepository,
} from "../repositories/postRepository";
import {
  Post as PostSchema,
  PostsCreatePostBodyPost,
} from "src/tyorapi.schemas";
import { newPostTitle } from "../models/PostTitle";
import { newPostContent } from "../models/PostContent";
import { newUuidValue } from "src/models/UuidValue";

export const getPostsUsecase = async (
  sql: Sql
): Promise<Result<Post[], Error>> => {
  return await getPostsRepository(sql);
};

export const createPostUsecase = async (
  sql: Sql,
  post_schema: PostsCreatePostBodyPost
): Promise<Result<Post, Error>> => {
  // UUIDどうするんだ問題
  // 外部からきたデータだけど、新しいエンティティだからUUIDは生成する必要があるよな
  // モデルに実装したnewPostContentにロジックを記述
  const post_title_value = newPostTitle(post_schema.post_title);
  if (post_title_value.isErr()) {
    return err(post_title_value.error);
  }

  const post_content_value = newPostContent(post_schema.post_content);
  if (post_content_value.isErr()) {
    return err(new Error("Invalid Post: post_content is required"));
  }

  const post = createPost(post_title_value.value, post_content_value.value);
  if (post.isErr()) {
    return err(post.error);
  }

  return await createPostRepository(sql, post.value);
};

export const updatePostUsecase = async (
  sql: Sql,
  post_schema: PostSchema
): Promise<Result<Post, Error>> => {
  const post_uuid_value = newUuidValue(post_schema.post_uuid);
  if (post_uuid_value.isErr()) {
    return err(post_uuid_value.error);
  }

  const old_post = await getPostByUuidRepository(sql, post_uuid_value.value);
  if (old_post.isErr()) {
    return err(old_post.error);
  }
  const post_title_value = newPostTitle(post_schema.post_title);
  if (post_title_value.isErr()) {
    return err(post_title_value.error);
  }

  const post_content_value = newPostContent(post_schema.post_content);
  if (post_content_value.isErr()) {
    return err(post_content_value.error);
  }

  const new_post = newPost(
    old_post.value.post_uuid,
    post_title_value.value,
    post_content_value.value,
    old_post.value.created_at
  );
  if (new_post.isErr()) {
    return err(new_post.error);
  }

  return await updatePostRepository(sql, new_post.value);
};
