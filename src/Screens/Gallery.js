import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Gallery() {
  return (
    <View style={styles.container}>
      <Text>Gallery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
