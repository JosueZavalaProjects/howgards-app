import { Text } from "react-native";
import { STORE_BASE_URL } from "@env";

export const StoresScreen = () => {
  console.log(STORE_BASE_URL);
  return <Text>URL: {process.env.STORE_BASE_URL}</Text>;
};
