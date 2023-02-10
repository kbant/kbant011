import { useRecoilValue } from "recoil";
import {todoState} from '../atoms/todos';

export const useTodoList = () => {
  return useRecoilValue(todoState);
}