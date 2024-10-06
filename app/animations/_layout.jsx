import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

export default function _layout() {
  return (
<SafeAreaView style={{flex:1 }}>
<Stack screenOptions={{headerShown:false}}>
  <Stack.Screen name='Camera'></Stack.Screen>
  <Stack.Screen name='InterPolation'></Stack.Screen>
  <Stack.Screen name='timing'></Stack.Screen>


</Stack>
</SafeAreaView>
  )
}