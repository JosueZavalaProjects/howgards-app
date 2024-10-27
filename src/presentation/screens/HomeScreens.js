import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
/* import { TouchableOpacity } from "react-native-gesture-handler"; */
import { Houses } from "../components/Houses/Houses";

export const HomeScreen = () => {
  const navigation = useNavigation();
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

      {/*  <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
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
