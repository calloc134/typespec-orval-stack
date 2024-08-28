import { uuidv7 } from "uuidv7";
import { ok, err, Result } from "neverthrow";
// 正規表現でバリデーションを行う
const uuid_pattern =
  /^([0-9a-f]{8})-([0-9a-f]{4})-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const validateUuid = (uuid: string): boolean => {
  return uuid_pattern.test(uuid);
};

export type UuidValue = {
  value: string;
};

export const generateUuidValue = (): Result<UuidValue, Error> => {
  const uuid = uuidv7();
  return ok({ value: uuid });
};

export const newUuidValue = (value: string): Result<UuidValue, Error> => {
  if (!validateUuid(value)) {
    return err(new Error("Invalid UUID"));
  }

  return ok({ value });
};
