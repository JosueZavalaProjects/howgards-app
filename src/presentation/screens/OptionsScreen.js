import React from "react";
import { Text, View } from "react-native";
import { OptionsCards } from "../components/Options/OptionsCards";

export const OptionsScreen = ({ route }) => {
  const { house, colors, emoji } = route.params;

  /* console.log(house);
  console.log(colors); */
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        {house} {emoji}
      </Text>
      <OptionsCards colors={colors} house={house} />
    </View>
  );
};
