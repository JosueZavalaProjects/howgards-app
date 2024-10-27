import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

export const StackScreen = ({ route }) => {
  /* const navigation = useNavigation();
  const state = navigation.getP(); */
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
    </View>
  );
};
