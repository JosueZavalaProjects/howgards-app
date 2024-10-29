import { Text, TouchableOpacity, View } from "react-native";
import { OptionsStyles as styles } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Col, Row } from "../UI/Layout";

export const OptionsCards = ({ colors, house }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Row>
        <Col numRows={2} backgroundColor={colors[0]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Store", {
                house: String(house).toLowerCase(),
              })
            }
          >
            <Text style={{ ...styles.text, color: colors[1] }}>
              House Store
            </Text>
          </TouchableOpacity>
        </Col>
        <Col numRows={2} backgroundColor={colors[0]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("HallFame", {
                house: String(house).toLowerCase(),
              })
            }
          >
            <Text style={{ ...styles.text, color: colors[1] }}>
              Hall of fame
            </Text>
          </TouchableOpacity>
        </Col>
      </Row>
    </View>
  );
};
