import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import RootStack from './screens/RootStack';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
