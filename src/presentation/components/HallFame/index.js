import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CharacterCard } from "./CharactersCard";
import { useGetCharacters } from "../../../hooks/useGetCharacters";

export const HallFamePage = ({ house = "" }) => {
  const [characters, setCharacters] = useState([]);
  const [paginatedCharacters, setPaginatedCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { GetCharacters } = useGetCharacters();
  const handleGetCharacters = async () => {
    const filterdCharacters = await GetCharacters(house);
    console.log(filterdCharacters.length);
    console.log(Math.ceil(filterdCharacters.length / 4));
    setTotalPages(Math.ceil(filterdCharacters.length / 4));

    setCharacters(filterdCharacters);
  };
  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  useEffect(() => {
    handleGetCharacters();
  }, []);

  useEffect(() => {
    const newCharacters = [...characters].slice(page, page + 4);
    setPaginatedCharacters(newCharacters);
  }, [characters, page]);

  return (
    <View
      style={{
        padding: 24,
        height: 550,
      }}
    >
      <FlatList
        data={paginatedCharacters}
        numColumns={2}
        style={{
          alignContent: "center",
        }}
        renderItem={(character) => <CharacterCard character={character.item} />}
        scrollEnabled={true}
        contentContainerStyle={{ gap: 8 }}
        columnWrapperStyle={{ gap: 8 }}
        keyExtractor={(item) => item.index}
      />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#D6D6D6",
          marginTop: 16,
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 40, color: "#7884A5", textAlign: "center" }}>
            &lt;
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 40, color: "#7884A5", textAlign: "center" }}>
          Page: {page + 1} of {totalPages}
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 40, color: "#A9B1C6", textAlign: "center" }}>
            &gt;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
