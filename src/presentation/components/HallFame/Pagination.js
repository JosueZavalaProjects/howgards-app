import { Text, TouchableOpacity, View } from "react-native";

export const Pagination = ({
  page,
  totalPages,
  handleNextPage,
  handlePrevPage,
}) => {
  const BACK_DIABLED = page === 0;
  const NEXT_DISABLED = page >= totalPages - 1;
  return (
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
      <TouchableOpacity
        disabled={BACK_DIABLED}
        onPress={() => handlePrevPage()}
      >
        <Text
          style={{
            fontSize: 40,
            color: BACK_DIABLED ? "#A9B1C6" : "#7884A5",
            textAlign: "center",
          }}
        >
          &lt;
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, color: "#7884A5", textAlign: "center" }}>
        Page: {page + 1} of {totalPages}
      </Text>
      <TouchableOpacity
        disabled={NEXT_DISABLED}
        onPress={() => handleNextPage()}
      >
        <Text
          style={{
            fontSize: 40,
            color: NEXT_DISABLED ? "#A9B1C6" : "#7884A5",
            textAlign: "center",
          }}
        >
          &gt;
        </Text>
      </TouchableOpacity>
    </View>
  );
};
