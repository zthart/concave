import { mutation } from 'convex-dev/server';

// Send an image.
export default mutation(({ db }, blob: string, dest_signature: string) => {
  const image = { blob, dest_signature };
  db.insert('images', image);
});
