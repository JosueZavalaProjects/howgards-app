import { StyleSheet } from "react-native";

export const globalColors = {};

export const globalStyles = StyleSheet.create({});

export const HousesStyles = StyleSheet.create({
  /* container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }, */
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "blue",
  },
});

export const OptionsStyles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },
  container: {
    width: "100%",
    padding: 8,
    marginTop: 16,
    columnGap: 8,
  },
  row: {
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  "1col": {
    backgroundColor: "lightblue",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1,
  },
  "2col": {
    backgroundColor: "green",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  "3col": {
    backgroundColor: "orange",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
  },
  "4col": {
    flex: 4,
  },
});
