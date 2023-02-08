import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CompositeNavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type MainTabParamList = {
  Articles: undefined;
};

export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;
export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;

/* RootStack */

export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const enum ArticleScreenNames {
  MainTab = 'MainTab',
  Articles = 'Articles',
}
