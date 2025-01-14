import { POTTER_API } from "@env";
export const getHouses = async () => {
  const response = await fetch(`${POTTER_API}/houses`);

  return response.json();
};

export const getCharacters = async () => {
  const response = await fetch(`${POTTER_API}/characters`);

  return response.json();
};
