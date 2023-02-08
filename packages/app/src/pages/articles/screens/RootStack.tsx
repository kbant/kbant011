import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { ArticleScreenNames, RootStackParamList } from './types';
import MainTab from './MainTab';

function BackBtn() {
  return <Icon name="arrow-back-ios" color="black" size={20} />;
}
const Stack =
  Platform.OS === 'web' ? createStackNavigator<RootStackParamList>() : createNativeStackNavigator<RootStackParamList>();

const navigatorOptions =
  Platform.OS === 'web'
    ? {
        headerShown: true,
        headerBackImage: BackBtn,
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      }
    : {};

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ArticleScreenNames.MainTab} component={MainTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootStack;
