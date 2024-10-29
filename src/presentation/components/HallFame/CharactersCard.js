import { Image, Text, View } from "react-native";

export const CharacterCard = ({ character }) => {
  return (
    <View
      style={{
        backgroundColor: "#6D98BA",
        width: "48%",
        alignItems: "center",
        padding: 8,
        borderRadius: 20,
        borderColor: "#54442B",
        borderWidth: 1,
      }}
    >
      <Image
        style={{ width: "100%", height: "100%", borderRadius: 20 }}
        source={{
          uri: character.image,
        }}
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {character.fullName}
        </Text>
        <Text>"{character.nickname}"</Text>
        <Text>{character.hogwartsHouse}</Text>
        <Text>{character.birthdate}</Text>
      </View>
    </View>
  );
};
