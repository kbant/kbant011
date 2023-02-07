import React from 'react';
import Animated, {
  Easing,
  FadeInUp,
  FadeOutDown,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Button, ButtonProps } from '../Button/Button';
import { View } from 'react-native';

export const AnimatedButton = ({ text, color, textColor }: ButtonProps) => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View>
      <View>
        <Animated.View style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]} />
      </View>
      <View>
        <Button
          text="TOGGLE"
          color={color}
          textColor={textColor}
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </View>
    </View>
  );
};
