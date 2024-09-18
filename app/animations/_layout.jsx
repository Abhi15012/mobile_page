import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

export default function _layout() {
  return (
<SafeAreaView style={{flex:1 }}>
<Stack>
  <Stack.Screen name='repeat'></Stack.Screen>
  <Stack.Screen name='anim1'></Stack.Screen>
  <Stack.Screen name='timing'></Stack.Screen>


</Stack>
</SafeAreaView>
  )
}