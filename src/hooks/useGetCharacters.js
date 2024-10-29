import { getCharacters } from "../services/api";

export const useGetCharacters = () => {
  const getAPICharacters = async (house = "gryffindor") => {
    const response = await getCharacters();

    const houseCharacters = response.filter(
      (character) => String(character.hogwartsHouse).toLowerCase() === house
    );

    return houseCharacters;
  };

  return {
    GetCharacters: getAPICharacters,
  };
};
