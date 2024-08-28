import { ok, err, Result } from "neverthrow";

export type PostTitleValue = {
  value: string;
};

export const newPostTitle = (value: string): Result<PostTitleValue, Error> => {
  if (!value || value.length === 0) {
    return err(new Error("Invalid PostTitle"));
  }

  if (value.length > 100) {
    return err(new Error("Invalid PostTitle: too long"));
  }

  return ok({ value });
};
