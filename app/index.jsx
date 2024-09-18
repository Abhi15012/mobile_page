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
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp } from 'react-native-reanimated';;
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Tabs, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
export default function index() {
  const [color, setcolor] = useState("monthly");
  const [tap, setTap] = useState(false);
  const route= useRouter()

  const anim=()=>{
route.navigate("/animations")

  }

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
  

    return ()=>backHandler.remove();
  }, []);
  
const taps=()=>{

}
  return (
    <ScrollView>
    <View className="h-full flex  ">
      <View className=" h-full m-4 ">
        <View className="w-full flex-row flex justify-between">
    
        <TouchableOpacity    onPress={()=>{BackHandler.exitApp()}} >
            <View className=" h-10 w-10">
              <Ionicons name="arrow-back-outline" size={24} color="gray"  />
            </View>
          </TouchableOpacity>

          <EvilIcons name="user" size={30} color="gray" />
        </View>

        <View className="mt-4 rounded-lg h-[30%] flex flex-col items-center gap-4 ">
          <Animated.View entering={SlideInLeft.duration(500)} className="flex mr-44  ">
            <Text className="mt-4 w-[60%] text-3xl text-slate-700 font-bold">
              SELECT{" "}
            </Text>
            <Text className="text-3xl text-slate-700 font-bold">YOUR PLAN</Text>
          </Animated.View>
          <Animated.Text entering={SlideInRight.duration(500)}className="m-4 text-slate-500 w-[90%] justify-center">
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
                backgroundColor: color === "yearly" ? "#7CF5FF" : "transparent", // or 'none' if you prefer
              }}
            >
              <Text>Yearly</Text>
            </TouchableOpacity>
          </View>
          <Text className="italic text-slate-400 text-[13px] ">
            No discount. Billed monthly. Cancel anytime
          </Text>

          <View className="flex flex-row mt-4 gap-x-4 ">
            <Link href={"/"} onPress={()=>{setTap(true)}}  style={{backgroundColor:[tap===true ? "black":"gray"]}}>Individual </Link>
            <Text>|</Text>
            <Link href={""}>Small Business </Link>
            <Text>|</Text>
            <Link href={""}>Enterprise</Link>

      
          </View>

          <Animated.View entering={SlideInDown.duration(500).delay(500)} className="   rounded-xl">
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
                    Unlock the power of insights with our cutting-edge Online
                    Survey Service. Designed to simplify data collection and
                    analysis.
                  </Text>
                </View>
                <View className="m-3 flex flex-row justify-between">
                  <Text className="text-pink-800">24/7 customer service</Text>
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
                  <Text className="text-lime-800">24/7 customer service</Text>
                  <Text className="text-lime-800"> All features →</Text>
                </View>
              </View>
            </LinearGradient>

     </TouchableOpacity>
          </Animated.View>
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
                  We understand that everyone’s requirements are unique, and by
                  thoroughly examining our options, you’ll be empowered to
                  choose the ideal plan that suits you best.
                </Text>
              </View>
            </View>
          </View>
    
          <TouchableOpacity className="bg-blue-400/50 h-12 text-center w-32 rounded-3xl  " onPress={anim}>
            <Text className="my-auto mx-auto">See Animations</Text>
          </TouchableOpacity>
 
        
        </View>
      </View>
    </View>
    </ScrollView> );
}
