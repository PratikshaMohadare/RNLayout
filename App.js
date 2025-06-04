import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{backgroundColor: "plum", flex: 1}}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", top: 75, left: 75}}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f", flexGrow: 0 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156", position: "absolute", top: 100 }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56", flexGrow: 2 }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column", 
    // alignItems: "flex-start",
    // width: 300,
    // height: 300,
    // flexWrap: "wrap",
    
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     height: 300,
//     flexWrap: "wrap",
//     alignContent: "flex-start",
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "baseline",
//     flexDirection: "column",
//     justifyContent: "flex-center",
//      rowGap: 20,
    // columnGap: 30,
    // gap: 10,
//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: "red",
//   },
// });
