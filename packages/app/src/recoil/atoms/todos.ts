import { atom, selector } from 'recoil';
import { persistAtom } from './PersistAtom';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const nextTodoId = selector({
  key: 'nextTodoId',
  get: ({ get }) => {
    const todoList = get(todoState);
    const lastId = todoList[todoList.length - 1]?.id ?? 0;
    return lastId + 1;
  },
});
