import { query } from "convex-dev/server";
import { User } from "../src/common";

// List all users.
export default query(async ({ db }): Promise<User[]> => {
  return await db.table("users").collect();
});
