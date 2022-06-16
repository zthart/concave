import { query } from 'convex-dev/server';
import { Image } from '../src/common';

// List all incoming images.
export default query(async ({ db, signature }): Promise<Image[]> => {
  return await db
    .table('images')
    .filter((q) => q.eq(q.field('dest_signature'), signature))
    .collect();
});
