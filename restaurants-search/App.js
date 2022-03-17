import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";

export default function App() {
  const [term, setTerm] = useState("Burger");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/burger.png"),
    },
    {
      name: "Cake",
      imageUrl: require("./src/assets/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/pizza.png"),
    },
    {
      name: "Cafe",
      imageUrl: require("./src/assets/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/steak.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />

      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              imageUrl={item.imageUrl}
              index={index}
              active={item.name === term}
              onPress={handlePress}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
