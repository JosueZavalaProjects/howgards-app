import React from "react";
import { Text, View } from "react-native";
import { OptionsCards } from "../components/Options/OptionsCards";

export const OptionsScreen = ({ route }) => {
  const { house } = route.params;

  console.log(house);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        {house}
      </Text>
      <OptionsCards />
    </View>
  );
};
