import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useRestaurants from "../hooks/useRestaurants";

export default function Restaurants() {
  const [{ data, loading, error }, searhAPI] = useRestaurants();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    height: 100,
  },
});
