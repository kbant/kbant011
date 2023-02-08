import React from 'react';
import { View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from './RootType';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

export const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPress = () => {
    navigation.push('Detail', { id: 1 });
  };
  return (
    <View>
      <Button title="Detail" onPress={onPress}></Button>
      <Button title="AnimatedTestScreen" onPress={() => navigation.push('AnimatedTestScreen')} ></Button>
    </View>
  );
};

export default HomeScreen;
