import { ok, err, Result } from "neverthrow";

export type PostContentValue = {
  value: string;
};

export const newPostContent = (
  value: string
): Result<PostContentValue, Error> => {
  if (!value || value.length === 0) {
    return err(new Error("Invalid PostContent"));
  }

  if (value.length > 1000) {
    return err(new Error("Invalid PostContent: too long"));
  }

  return ok({ value });
};
