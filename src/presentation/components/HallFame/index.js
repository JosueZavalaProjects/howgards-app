import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { getCharacters } from "../../../services/api";
import { CharacterCard } from "./CharactersCard";
import { useGetCharacters } from "../../../hooks/useGetCharacters";

const DATA = [
  {
    birthdate: "Jul 31, 1980",
    children: [
      "James Sirius Potter",
      "Albus Severus Potter",
      "Lily Luna Potter",
    ],
    fullName: "Harry James Potter",
    hogwartsHouse: "Gryffindor",
    image:
      "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/harry_potter.png",
    index: 0,
    interpretedBy: "Daniel Radcliffe",
    nickname: "Harry",
  },
];
export const HallFamePage = ({ house = "" }) => {
  const [characters, setCharacters] = useState(DATA);

  const { GetCharacters } = useGetCharacters();
  const handleGetCharacters = async () => {
    const filterdCharacters = await GetCharacters(house);
    /* console.log(filterdCharacters); */
    setCharacters(filterdCharacters);
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return (
    <View
      style={{
        padding: 24,
      }}
    >
      {/*  {characters.map((character) => (
        <CharacterCard character={character} key={character.index} />
      ))} */}
      <FlatList
        data={characters}
        numColumns={2}
        style={{
          alignContent: "center",
        }}
        /* ItemSeparatorComponent={() => <View style={{ height: 4 }} />} */
        renderItem={(character) => <CharacterCard character={character.item} />}
        contentContainerStyle={{ gap: 8 }}
        columnWrapperStyle={{ gap: 8 }}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};
