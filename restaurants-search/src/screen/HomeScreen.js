import { View, StyleSheet } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

export default function HomeScreen() {
  const [term, setTerm] = useState("Burger");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../src/assets/burger.png"),
    },
    {
      name: "Cake",
      imageUrl: require("../src/assets/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../src/assets/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../src/assets/pizza.png"),
    },
    {
      name: "Cafe",
      imageUrl: require("../src/assets/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../src/assets/steak.png"),
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
  container: {
    backgroundColor: "rgb(253,253,253)",
    flex: 1,
  },
});
