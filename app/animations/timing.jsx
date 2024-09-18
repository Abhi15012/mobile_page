import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Animated, { useAnimatedStyle, withTiming, Easing, useSharedValue } from 'react-native-reanimated';

const AnimatedBox = () => {
  const opacity = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const fadeIn = () => {
    opacity.value = withTiming(1, {
      duration: 10000,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const fadeOut = () => {
    opacity.value = withTiming(0, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box,animatedStyle]} />
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default AnimatedBox;