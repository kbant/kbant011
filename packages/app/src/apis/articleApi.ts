import { AxiosPromise } from 'axios';
import { HttpClient } from './axios/apis';
import { Article } from './models/Article';

export async function getArticles() {
  const response = await HttpClient.get<Article[]>('/articles');
  return response.data;
}
