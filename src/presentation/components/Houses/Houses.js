import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { HousesStyles as styles } from "../../theme/theme";
import { getHouses } from "../../../services/api";
import { useState } from "react";

const DATA = [
  /* {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  }, */
  {
    animal: "Lion",
    colors: ["red", "gold"],
    emoji: "🦁",
    founder: "Godric Gryffindor",
    house: "Gryffindor",
    index: 0,
  },
];

const Item = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Stack")}
      style={{
        /* backgroundColor: "purple", */
        /* color: item.colors[0], */
        backgroundColor: item.colors[0],
        padding: 20,
        marginTop: "5%",
        width: "60%",
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
  /*  return (
    <View
      style={{
        backgroundColor: item.colors[0],
        color: item.colors[1],
        width: "50%",
      }}
    >
      <Text
        style={{
          ...styles.title,
          color: item.colors[1],
          padding: 16,
        }}
      >
        {item.emoji}
        {item.house}
      </Text>
    </View>
  ); */
};

export const Houses = () => {
  const [housesData, setHousesData] = useState(DATA);

  const handleGetHouses = async () => {
    const response = await getHouses();
    setHousesData(response);
    /* console.log(response); */
  };

  handleGetHouses();

  return (
    <View
      style={{
        padding: 4,
        /* backgroundColor: "#a3d2f3", */
      }}
    >
      <FlatList
        data={housesData}
        numColumns={1}
        /* rowGap={20}
        columnGap={20} */
        style={{
          alignContent: "center",
          /* columnGap: 8,
          rowGap: 8, */
          /* padding: 8, */
        }}
        renderItem={(item) => <Item item={item.item} />}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
}); */

/* 
const styles = StyleSheet.create({
  container: {
    display: "grid",
    padding: 24,
    backgroundColor: "#eaeaea",
    gap: 8,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 16,
  },
});
 */
