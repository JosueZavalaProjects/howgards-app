import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CharacterCard } from "./CharactersCard";
import { useGetCharacters } from "../../../hooks/useGetCharacters";
import { Pagination } from "./Pagination";

export const HallFamePage = ({ house = "" }) => {
  const [characters, setCharacters] = useState([]);
  const [paginatedCharacters, setPaginatedCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { GetCharacters } = useGetCharacters();
  const handleGetCharacters = async () => {
    const filterdCharacters = await GetCharacters(house);
    setTotalPages(Math.ceil(filterdCharacters.length / 4));

    setCharacters(filterdCharacters);
  };
  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  useEffect(() => {
    handleGetCharacters();
  }, []);

  useEffect(() => {
    const initial = 4 * page;
    const newCharacters = [...characters].slice(initial, initial + 4);
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

      <Pagination
        page={page}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </View>
  );
};
