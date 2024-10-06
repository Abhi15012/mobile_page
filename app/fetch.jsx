import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function fetch() {

 

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch('http://localhost:4001/api/blog/getinfo')
      let data = await res.json()
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    fetchPosts()
  }, [])
  console.log(posts)
  return (
    <View className="flex ">
      <Text>fetch</Text>
    </View>
  )
}