import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'black',
  },
});
