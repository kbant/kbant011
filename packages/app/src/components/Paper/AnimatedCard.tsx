import React from 'react';
import { Card, CardProps } from './Card';
import { useWindowDimensions } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated';

type Props = {
  marginHorizontal?: number;
  card: CardProps;
};

export const AnimatedCard = ({ marginHorizontal, card }: Props) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const cardsInRow = windowHeight > windowWidth ? 2 : 4;
  const gap = 8;
  const width = (windowWidth - (marginHorizontal || 12) * 2 - gap * cardsInRow) / cardsInRow;

  return (
    <Animated.View
      layout={Layout.duration(200).delay(200)}
      entering={FadeInUp}
      exiting={FadeOutDown}
      style={{ margin: gap / 2 }}>
      <Card {...card} />
    </Animated.View>
  );
};
