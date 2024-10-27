export const getHouses = async () => {
  const response = await fetch(
    "https://potterapi-fedeperin.vercel.app/en/houses"
  );

  return response.json();
};
