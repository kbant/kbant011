import { useMemo } from 'react';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { nextTodoId, todoState } from './../atoms/todos';

export const useTodoActions = () => {
  const setTodoState = useSetRecoilState(todoState);
  const addTodo = useRecoilCallback(
    ({ snapshot }) =>
      async (text: string) => {
        const nextId = await snapshot.getPromise(nextTodoId);
        setTodoState(prevState => prevState.concat({ id: nextId, text, done: false }));
      },
    [setTodoState],
  );

  return useMemo(
    () => ({
      addTodo,
      removeTodo: (id: number) => {
        setTodoState(prevState => prevState.filter(todo => todo.id !== id));
      },
      toggleTodo: (id: number) => {
        setTodoState(prevState => prevState.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
      },
    }),
    [setTodoState, addTodo],
  );
};
