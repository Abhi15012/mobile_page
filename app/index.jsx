import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  Alert,
  ScrollView,
} from "react-native";
import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Tabs, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import Flat12 from "./flat";
import Taps from "./taps";
import Cards from "./cards";

export default function index() {

  const route=useRouter()
  const [color, setcolor] = useState("monthly");



  const anim = () => {
    route.navigate("/animations");
  };



  return (
    <ScrollView nestedScrollEnabled={true}>
      <GestureHandlerRootView>
        <View className="h-full flex  ">
          <View className=" h-full m-4 ">
            <View className="w-full flex-row flex justify-between">
              <TouchableOpacity
                onPress={() => {
                  BackHandler.exitApp();
                }}
              >
                <View className=" h-10 w-10">
                  <Ionicons name="arrow-back-outline" size={24} color="gray" />
                </View>
              </TouchableOpacity>

              <EvilIcons name="user" size={30} color="gray" />
            </View>

            <View className="mt-4 rounded-lg h-[30%] flex flex-col items-center gap-4 ">
              <Animated.View
                entering={SlideInLeft.duration(500)}
                className="flex mr-44  "
              >
                <Text className="mt-4 w-[60%] text-3xl text-slate-700 font-bold">
                  SELECT{" "}
                </Text>
                <Text className="text-3xl text-slate-700 font-bold">
                  YOUR PLAN
                </Text>
              </Animated.View>
              <Animated.Text
                entering={SlideInRight.duration(500)}
                className="m-4 text-slate-500 w-[90%] justify-center"
              >
                We believe in flexibility and affordability, which is why we've
                designed a range of pricing plans for our online survey and
                newsletter creation service.
              </Animated.Text>

              <View className="mt-5 flex-row    bg-blue-300/20 h-12  rounded-3xl w-[80%]">
                <TouchableOpacity
                  className=" h-full text-center justify-center flex w-1/2 items-center rounded-3xl "
                  onPress={() => {
                    setcolor("monthly");
                  }}
                  style={{
                    backgroundColor:
                      color === "monthly" ? "#7CF4Ff" : "transparent", // or 'none' if you prefer
                  }}
                >
                  <Text>Monthly</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className=" h-full text-center justify-center flex w-1/2 items-center rounded-3xl "
                  onPress={() => {
                    setcolor("yearly");
                  }}
                  style={{
                    backgroundColor:
                      color === "yearly" ? "#7CF5FF" : "transparent", // or 'none' if you prefer
                  }}
                >
                  <Text>Yearly</Text>
                </TouchableOpacity>
              </View>
            <Text className="w-full h-fit ">
              <Flat12></Flat12>
            </Text>
          
<Taps/>
<View>
<Cards className=""/>
</View>

             
              <View className="m-3 rounded-2xl relative">
                <Image
                  source={require("../assets/xyz.jpg")}
                  style={{
                    width: 350,
                    height: 400,
                    marginLeft: 10,
                    borderRadius: 20,
                  }}
                />
                <View className="absolute">
                  <View className="flex rounded-3xl m-3 text-end mt-48  justify-between">
                    <AntDesign name="playcircleo" size={24} color="white" />
                  </View>
                  <View className="text-center mx-3">
                    <Text className="text-xl font-bold text-pink-400  shadow-lg shadow-black">
                      Questions About Our Plans?
                    </Text>
                    <Text className="text-white">
                      We understand that everyone’s requirements are unique, and
                      by thoroughly examining our options, you’ll be empowered
                      to choose the ideal plan that suits you best.
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                className="bg-blue-400/50 h-12 text-center w-32 rounded-3xl  "
                onPress={anim}
              >
                <Text className="my-auto mx-auto">See Animations</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </ScrollView>
  );
}
