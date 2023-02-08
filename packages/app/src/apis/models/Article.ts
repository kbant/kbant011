import { User } from './User';

export interface Article {
  id: number;
  title: string;
  body: string;
  user: User;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}
