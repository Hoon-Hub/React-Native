import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

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
      <Categories
        categories={commonCategories}
        setTerm={setTerm}
        term={term}
      ></Categories>
      <Restaurants term={term} />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
