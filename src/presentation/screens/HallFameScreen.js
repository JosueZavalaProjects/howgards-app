import { Text, View } from "react-native";
import { HallFamePage } from "../components/HallFame";

export const HallFameScreen = ({ route }) => {
  const { house = "gryffindor" } = route.params || {};
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "10%",
          marginBottom: "10%",
          textTransform: "capitalize",
        }}
      >
        {house} House of Fame
      </Text>
      <HallFamePage house={house} />
    </View>
  );
};
