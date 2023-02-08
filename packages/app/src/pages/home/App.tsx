// ERROR  TypeError: Cannot read property 'handleSetJSResponder' of null, js engine: hermes
// ERROR  TypeError: Cannot read property 'handleClearJSResponder' of null, js engine: hermes
// - Add react-native-gesture-handler
// - cd ios && pod install
// import 'react-native-gesture-handler';
import React from 'react';
import { Button, Text, View, Platform, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { RootStackParamList } from './screens/RootType';
import AnimatedTestScreen from './screens/AnimatedTest';
import Icon from 'react-native-vector-icons/MaterialIcons';

console.log('Platform : ' + Platform.OS);

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

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="AnimatedTestScreen" component={AnimatedTestScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
