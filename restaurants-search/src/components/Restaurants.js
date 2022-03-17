import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({ term }) {
  const [{ data, loading, error }, searhAPI] = useRestaurants();
  useEffect(() => {
    searhAPI(term);
  }, [term]);
  console.log({ data: data, loading, error });

  if (loading)
    return (
      <ActivityIndicator size="large" marginVertical="30"></ActivityIndicator>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Error</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem item={item}></RestaurantItem>}
      ></FlatList>
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
