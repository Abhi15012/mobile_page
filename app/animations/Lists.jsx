import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ListItem = React.memo(({ item, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.2),
         
        },
  
      ],
    };
  }, []);

  return <Animated.View style={[styles.listItem, rStyle]} />;
});

const styles = StyleSheet.create({
  listItem: {
    height: 300,
    width: '90%',
    backgroundColor: '#78CAD2',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
});

export { ListItem };
