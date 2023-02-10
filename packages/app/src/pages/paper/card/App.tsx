import React from 'react';
import { Text } from 'react-native';
import { RecoilRoot } from 'recoil';

import TodoApp from './TodoCardApp';

export const App = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<Text>Loading</Text>}>
        <TodoApp />
      </React.Suspense>
    </RecoilRoot>
  );
};
