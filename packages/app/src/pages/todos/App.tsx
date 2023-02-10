import React from 'react';
import { Text } from 'react-native';
import { RecoilRoot } from 'recoil';

import TodoApp from './TodoApp';

export const App = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<Text>Loading</Text>}>
        <TodoApp />
      </React.Suspense>
    </RecoilRoot>
  );
};
