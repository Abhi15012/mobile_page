import React from 'react';
import { View } from 'react-native';
import Animated, { 
  useAnimatedGestureHandler, 
  useSharedValue, 
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export default function PanGestures() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex bg-red-300 h-full justify-center items-center">
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View 
            className="w-20 h-20 bg-black rounded-lg"
            style={animatedStyle}
          />
        </PanGestureHandler>
      </View> 
    </GestureHandlerRootView>
  );
}
