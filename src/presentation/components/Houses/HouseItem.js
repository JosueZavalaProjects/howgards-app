import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

export const HouseItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Options", {
          house: item.house,
          colors: item.colors,
          emoji: item.emoji,
        })
      }
      style={{
        backgroundColor: item.colors[0],
        padding: 20,
        marginTop: "5%",
        width: "70%",
        alignSelf: "center",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          textAlign: "center",
          color: item.colors[1],
          gap: 8,
        }}
      >
        {item.emoji}
        {item.house}
      </Text>
    </TouchableOpacity>
  );
};
