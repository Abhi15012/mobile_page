import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Taps() {
  const [activeTab, setActiveTab] = useState("individual");

  const tabs = ["Individual", "Small Business", "Enterprise"];

  const handleTabPress = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  return (
    <View className="flex flex-row mt-4 gap-x-4">
      {tabs.map((tab, index) => (
        <React.Fragment key={tab}>
          <TouchableOpacity onPress={() => handleTabPress(tab)}>
            <Text
              className={
                activeTab === tab.toLowerCase()
                  ? "text-pink-600 underline"
                  : "text-slate-600"
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
          {index < tabs.length - 1 && <Text>|</Text>}
        </React.Fragment>
      ))}
    </View>
  );
}