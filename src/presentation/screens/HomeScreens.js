import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Home screen
      </Text>
      {/* <TouchableOpacity>
        <Text>Test</Text>
      </TouchableOpacity> */}
      {/*       <TouchableOpacity
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
          Go to Stack Screen
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};
