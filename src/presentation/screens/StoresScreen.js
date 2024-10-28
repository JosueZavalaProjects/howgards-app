import { STORE_BASE_URL } from "@env";
import { WebView } from "react-native-webview";

export const StoresScreen = ({ route }) => {
  const { house = "gryffindor" } = route.params || {};

  return (
    <WebView
      source={{ uri: `${STORE_BASE_URL}/${house}` }}
      style={{ flex: 1 }}
    />
  );
};
