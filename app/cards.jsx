import { View, Text,  BackHandler, } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated,{SlideInDown} from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'
export default function Cards() {
  
  useEffect(() => {

    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit?", [
        { text: "Cancel", onPress: () => null },
        {
          text: "Exit",
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View className="flex items-center mt-4 ">
 <Animated.View
                entering={SlideInDown.duration(500).delay(500)}
                className="   rounded-xl"
              >
                <TouchableOpacity>
                  <LinearGradient
                    style={{ borderRadius: 20 }}
                    colors={["pink", "white"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View className="h-56 m-4 ">
                      <View className="m-3 flex flex-row gap-32">
                        <View className="flex gap-2">
                          <Text className="font-semibold text-lg text-pink-700 ">
                            Survey
                          </Text>
                          <Text className="font-semibold text-2xl text-pink-600 ">
                            $9.99/mo
                          </Text>
                        </View>
                        <View>
                          <Text>Icons</Text>
                        </View>
                      </View>

                      <View className="m-3">
                        <Text className="text-pink-600">
                          Unlock the power of insights with our cutting-edge
                          Online Survey Service. Designed to simplify data
                          collection and analysis.
                        </Text>
                      </View>
                      <View className="m-3 flex flex-row justify-between">
                        <Text className="text-pink-800">
                          24/7 customer service
                        </Text>
                        <Text className="text-pink-800"> All features →</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                  <LinearGradient
                    colors={["#6EC207", "white"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ marginTop: 10, borderRadius: 20 }}
                  >
                    <View className="h-56  m-4 rounded-xl">
                      <View className="m-3 flex flex-row gap-32">
                        <View className="flex gap-2">
                          <Text className="font-semibold text-lg text-lime-800 ">
                            Newsletter
                          </Text>
                          <Text className="font-semibold text-2xl text-lime-900 ">
                            $19.99/mo
                          </Text>
                        </View>
                        <View>
                          <Text>Icons</Text>
                        </View>
                      </View>

                      <View className="m-3">
                        <Text className="text-lime-700 ">
                          Elevate your communication game with us. We're here to
                          transform your messages into captivating, engaging
                          newsletters that captivate your audience.
                        </Text>
                      </View>
                      <View className="m-3 flex flex-row justify-between">
                        <Text className="text-lime-800">
                          24/7 customer service
                        </Text>
                        <Text className="text-lime-800"> All features →</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
    </View>
  )
}