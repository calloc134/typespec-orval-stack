import postgres from "postgres";

export const createPostRepository = async () => {
  const sql = postgres();
  const result = await sql<
    {
      post_uuid: string;
      post_title: string;
      post_content: string;
      post_created_at: Date;
    }[]
  >`SELECT * FROM post`;
  return result;
};
