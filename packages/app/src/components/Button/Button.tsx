import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type ButtonProps = {
  onPress?: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
  },
});

export const Button = ({ text, onPress, color, textColor }: ButtonProps) => (
  <Pressable
    style={[styles.button, !!color && { backgroundColor: color }]}
    onPress={onPress}
    android_ripple={{ color: textColor ? textColor : 'white' }}>
    <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>{text}</Text>
  </Pressable>
);
