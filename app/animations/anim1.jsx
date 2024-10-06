import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import { Svg, Circle } from 'react-native-svg';


export default function anim1() {





   //const translate=  useSharedValue(1)

  // const handleTrans =()=>{

  //   translate.value += 50;
  // }
  // const animatedStyles = useAnimatedStyle(() => ({
  //   transform: [{ translateY: withSpring(translate.value*2,{damping:10, stiffness:100}) }],
  // }));
const Anicircle= Animated.createAnimatedComponent(Circle)
  const big= useSharedValue(0.1)
  const handleTrans=()=>{
    big.value += 0.5
  }

  const animatedStyles=useAnimatedStyle(()=>({
    transform:[{scale:withSpring(big.value*2,)}]
  }))

  const decreaseSize=()=>{
    big.value -=0.2
  }
 

  // const animations=useAnimatedProps(()=>({
  //   big:withTiming(big.value)
  // }))
  return (

<View className='bg-red-500 h-screen flex items-center '>

<View  className=" mx-auto my-2 w-[90%] h-[50%] flex justify-start items-center ">
 <Animated.View style={[animatedStyles,{backgroundColor:"black" , height:60 , width:60 ,borderRadius:10 }]} />
<Animated.View /> 
{/* <Svg>
 <Anicircle cx="50%" cy="50%" fill='#b58df1' animatedStyles={animations}>
 </Anicircle> 
</Svg>    */}






      </View>
      <TouchableOpacity className="bg-green-500  w-20 h-10  rounded-2xl" onPress={handleTrans} >
      <Text className=" mx-auto my-auto">tada!</Text>
     </TouchableOpacity>
     
<TouchableOpacity className="bg-blue-500  w-20 h-10  mt-4 rounded-2xl" onPress={decreaseSize} >
<Text className=" mx-auto my-auto">tada!</Text>
</TouchableOpacity>
</View>




  )
}