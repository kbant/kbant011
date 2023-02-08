import { User } from "./User";

export interface Commnet {
  id: number;
  message: string;
  user: User;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}