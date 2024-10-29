import React from "react";
import { Text, View } from "react-native";
import { Houses } from "../components/Houses/Houses";

export const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        Choose your house
      </Text>
      <Houses />
    </View>
  );
};
