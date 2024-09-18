import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot, Stack } from 'expo-router'

export default function _layout() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style='black'/>

<Stack screenOptions={{headerShown:false}}>
  <Stack.Screen name='animations'/>
  
</Stack>

    </SafeAreaView>
  )
}