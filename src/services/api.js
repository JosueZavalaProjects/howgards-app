import { HOUSES_API } from "@env";
export const getHouses = async () => {
  const response = await fetch(`${HOUSES_API}`);

  return response.json();
};
