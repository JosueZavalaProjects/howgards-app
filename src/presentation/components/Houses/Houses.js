import { FlatList, View } from "react-native";
import { getHouses } from "../../../services/api";
import { useEffect, useState } from "react";
import { HouseItem } from "./HouseItem";

export const Houses = () => {
  const [housesData, setHousesData] = useState();

  const handleGetHouses = async () => {
    try {
      const response = await getHouses();
      setHousesData(response);
    } catch (error) {
      throw new Error("Error in getHouses fetch");
    }
  };

  useEffect(() => {
    handleGetHouses();
  }, []);

  return (
    <View
      style={{
        padding: 4,
      }}
    >
      <FlatList
        data={housesData}
        numColumns={1}
        style={{
          alignContent: "center",
        }}
        renderItem={(item) => <HouseItem item={item.item} />}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};
