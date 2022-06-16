import { mutation } from 'convex-dev/server';

// Create a new user.
export default mutation(
  ({ db }, name: string, signature: string, public_key: string) => {
    const user = { signature, name, public_key };
    db.insert('users', user);
  }
);
