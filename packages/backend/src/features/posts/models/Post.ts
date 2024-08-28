import { generateUuidValue, UuidValue } from "../../../models/UuidValue";
import { PostContentValue } from "./PostContent";
import { PostTitleValue } from "./PostTitle";

import { ok, err, Result } from "neverthrow";

export type Post = {
  post_uuid: UuidValue;
  post_title: PostTitleValue;
  post_content: PostContentValue;
  created_at: Date;
};

export const createPost = (
  post_title: PostTitleValue,
  post_content: PostContentValue
): Result<Post, Error> => {
  if (!post_title) {
    return err(new Error("Invalid Post: post_title is required"));
  }
  if (!post_content) {
    return err(new Error("Invalid Post: post_content is required"));
  }

  // 現在の日時を取得
  const created_at = new Date();

  const uuid_result = generateUuidValue();
  if (uuid_result.isErr()) {
    return err(uuid_result.error);
  }
  const post_uuid = uuid_result.value;

  return ok({
    post_uuid,
    post_title,
    post_content,
    created_at,
  });
};

export const newPost = (
  post_uuid: UuidValue,
  post_title: PostTitleValue,
  post_content: PostContentValue,
  created_at: Date
): Result<Post, Error> => {
  if (!post_uuid) {
    return err(new Error("Invalid Post: post_uuid is required"));
  }
  if (!post_title) {
    return err(new Error("Invalid Post: post_title is required"));
  }
  if (!post_content) {
    return err(new Error("Invalid Post: post_content is required"));
  }
  if (!created_at) {
    return err(new Error("Invalid Post: created_at is required"));
  }

  return ok({
    post_uuid,
    post_title,
    post_content,
    created_at,
  });
};
