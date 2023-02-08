import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ArticlesScreen from './ArticlesScreen';
import { ArticleScreenNames, MainTabParamList } from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ArticleScreenNames.Articles}
        component={ArticlesScreen}
        options={{
          title: '게시글 목록',
          tabBarIcon: ({ color, size }) => <Icon name="article" color={color} size={size} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTab;
