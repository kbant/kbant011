import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
  AnimatedTestScreen: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
