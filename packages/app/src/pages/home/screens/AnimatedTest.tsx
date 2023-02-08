import React from 'react';
import { View, Button, Text } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './RootType';
import AnimatedListExample from '../../components/Animated/ParticipantList';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'AnimatedTestScreen'>;
export const AnimatedTestScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <AnimatedListExample />
    </View>
  );
};

export default AnimatedTestScreen;
