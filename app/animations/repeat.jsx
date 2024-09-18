import { View, Text, TouchableOpacity,  } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming,Easing } from 'react-native-reanimated'


export default function repeat() {

  const duration=2000

const defaultanim=useSharedValue(0)


const xtrans= 200



const animatedDefault = useAnimatedStyle(() => ({
  transform: [{ translateX: defaultanim.value }],
}));
const animatedChanged = useAnimatedStyle(() => ({
  transform: [{ translateX:defaultanim.value }],
}));

const move=()=>{
 defaultanim.value=withRepeat(withTiming(xtrans, {duration:duration, easing:Easing.linear}),5, true) 
}
const movequad=()=>{
  defaultanim.value=withRepeat(withTiming(xtrans, {duration:duration, easing:Easing.quad}),5, true) 
 }
  return (
    <View className="w-full gap-2 ">
    <Animated.View style={[animatedDefault]} className="bg-sky-400 h-16 w-16 rounded-xl  ">
    <Text className="mx-auto my-auto ">inout</Text>
    </Animated.View>
    <Animated.View style={[animatedChanged]}  className="bg-lime-500 h-16 w-16 rounded-xl  ">
    <Text className="mx-auto my-auto ">inout</Text>
    </Animated.View>

<View className="w-full flex items-center justify-end h-96 ">
<TouchableOpacity className="bg-red-500 rounded-2xl h-12 w-28" onPress={move}>
  <Text className="mx-auto my-auto">touch here</Text>
  </TouchableOpacity> 
  </View>  
   </View>
  )
}