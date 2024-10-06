import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function Flat12() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://server-ck3p.onrender.com/api/blog/getinfo");
        console.log(response.data);
        setPosts(response.data); // Use response.data instead of response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => String(index)} // Add keyExtractor
      renderItem={({ item }) => (
        <Text className="text-sm italic w-fit h-fit">{item}</Text> // Use style instead of className
      )}
    />
  );
}