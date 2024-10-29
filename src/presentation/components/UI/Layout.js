import { View } from "react-native";
import { OptionsStyles as styles } from "../../theme/theme";

export const Col = ({ numRows, backgroundColor = "white", children }) => {
  return (
    <View
      style={{
        ...styles[`${numRows}col`],
        backgroundColor,
      }}
    >
      {children}
    </View>
  );
};

export const Row = ({ children }) => <View style={styles.row}>{children}</View>;
