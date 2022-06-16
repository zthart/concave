import { query } from "convex-dev/server";
import { Image } from "../src/common";

// List all incoming images.
export default query(async ({ db }): Promise<Image[]> => {
  return await db.table("images").collect(); // XXX filter based on signature
});
