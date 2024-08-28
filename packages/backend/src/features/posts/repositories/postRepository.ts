import { Sql } from "postgres";
import { newPost, Post } from "../models/Post";
import { ok, err, Result, fromPromise } from "neverthrow";
import { newPostTitle } from "../models/PostTitle";
import { newUuidValue, UuidValue } from "src/models/UuidValue";

const convertPostRow = (row: {
  post_uuid: string;
  post_title: string;
  post_content: string;
  post_created_at: Date;
}): Result<Post, Error> => {
  const post_title = newPostTitle(row.post_title);
  if (post_title.isErr()) {
    return err(post_title.error);
  }
  const post_content = newPostTitle(row.post_content);
  if (post_content.isErr()) {
    return err(post_content.error);
  }

  const post_uuid = newUuidValue(row.post_uuid);
  if (post_uuid.isErr()) {
    return err(post_uuid.error);
  }

  const response_post = newPost(
    post_uuid.value,
    post_title.value,
    post_content.value,
    row.post_created_at
  );
  if (response_post.isErr()) {
    return err(response_post.error);
  }

  return ok(response_post.value);
};

const convertPostRows = (
  rows: {
    post_uuid: string;
    post_title: string;
    post_content: string;
    post_created_at: Date;
  }[]
): Result<Post[], Error> => {
  const posts: Post[] = [];
  for (const row of rows) {
    const response_post = convertPostRow(row);
    if (response_post.isErr()) {
      return err(response_post.error);
    }

    posts.push(response_post.value);
  }

  return ok(posts);
};

export const createPostRepository = async (
  sql: Sql,
  request_post: Post
): Promise<Result<Post, Error>> => {
  const query_neverthrow = fromPromise(
    (async () => {
      const query_result = await sql<
        {
          post_uuid: string;
          post_title: string;
          post_content: string;
          post_created_at: Date;
        }[]
      >`INSERT INTO post (post_uuid, post_title, post_content, post_created_at) VALUES (${request_post.post_uuid.value}::uuid, ${request_post.post_title.value}, ${request_post.post_content.value}, ${request_post.created_at}) RETURNING *`;

      return query_result;
    })(),
    (error) => new Error(`Failed to create post: ${error}`)
  );

  const query_result = await query_neverthrow;

  if (query_result.isErr()) {
    return err(query_result.error);
  }

  if (query_result.value.length !== 1) {
    return err(new Error("Failed to create post: length is not 1"));
  }

  const row = query_result.value[0];

  const response_post = convertPostRow(row);

  if (response_post.isErr()) {
    return err(response_post.error);
  }

  return ok(response_post.value);
};

export const updatePostRepository = async (
  sql: Sql,
  request_post: Post
): Promise<Result<Post, Error>> => {
  const query_neverthrow = fromPromise(
    (async () => {
      const query_result = await sql<
        {
          post_uuid: string;
          post_title: string;
          post_content: string;
          post_created_at: Date;
        }[]
      >`UPDATE post SET post_title = ${request_post.post_title.value}, post_content = ${request_post.post_content.value}, post_created_at = ${request_post.created_at} WHERE post_uuid = ${request_post.post_uuid.value}::uuid RETURNING *`;

      return query_result;
    })(),
    (error) => new Error(`Failed to update post: ${error}`)
  );

  const query_result = await query_neverthrow;

  if (query_result.isErr()) {
    return err(query_result.error);
  }

  if (query_result.value.length !== 1) {
    return err(new Error("Failed to update post: length is not 1"));
  }

  const row = query_result.value[0];

  const response_post = convertPostRow(row);

  if (response_post.isErr()) {
    return err(response_post.error);
  }

  return ok(response_post.value);
};

export const getPostsRepository = async (
  sql: Sql
): Promise<Result<Post[], Error>> => {
  const query_neverthrow = fromPromise(
    (async () => {
      const query_result = await sql<
        {
          post_uuid: string;
          post_title: string;
          post_content: string;
          post_created_at: Date;
        }[]
      >`SELECT * FROM post`;

      return query_result;
    })(),
    (error) => new Error(`Failed to get posts: ${error}`)
  );

  const query_result = await query_neverthrow;

  if (query_result.isErr()) {
    return err(query_result.error);
  }

  const response_posts = convertPostRows(query_result.value);

  if (response_posts.isErr()) {
    return err(response_posts.error);
  }

  return ok(response_posts.value);
};

export const getPostByUuidRepository = async (
  sql: Sql,
  post_uuid: UuidValue
): Promise<Result<Post, Error>> => {
  const query_neverthrow = fromPromise(
    (async () => {
      const query_result = await sql<
        {
          post_uuid: string;
          post_title: string;
          post_content: string;
          post_created_at: Date;
        }[]
      >`SELECT * FROM post WHERE post_uuid = ${post_uuid.value}::uuid`;

      return query_result;
    })(),
    (error) => new Error(`Failed to get post: ${error}`)
  );

  const query_result = await query_neverthrow;

  if (query_result.isErr()) {
    return err(query_result.error);
  }

  if (query_result.value.length !== 1) {
    return err(new Error("Failed to get post: length is not 1"));
  }

  const row = query_result.value[0];

  const response_post = convertPostRow(row);

  if (response_post.isErr()) {
    return err(response_post.error);
  }

  return ok(response_post.value);
};
