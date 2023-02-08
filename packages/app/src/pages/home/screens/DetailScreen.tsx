import React from 'react';
import { View, Button, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './RootType';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export const DetailScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <Text>Detail {params.id}</Text>
      <FAIcon.Button name="facebook" backgroundColor="green">
        <Text>Facebook</Text>
      </FAIcon.Button>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test1</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test3</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
      <Text>Test4</Text>
    </View>
  );
};

export default DetailScreen;
