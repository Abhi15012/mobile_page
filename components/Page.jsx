import { View, Text ,Dimensions, StyleSheet} from 'react-native'
import React from 'react'

export default function Page() {
  const styles=StyleSheet.create({
    pageContainer:{
      width,height
    }
  })

  const {height,width}=Dimensions.get('window')
  return (
    <View style={[styles.pageContainer,{backgroundColor:`rbga(0,0,256,0.${index})`}]}>
      {/* <Text>Page</Text> */}
    </View>
  )
}
