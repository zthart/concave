import { Id } from "convex-dev/values";

export type Image = {
  _id: Id;
  blob: string;
  dest_signature: string;
};

export type User = {
  _id: Id;
  signature: string;
  name: string;
  public_key: string;
};
