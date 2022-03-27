import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { elevation } from "../common/styles";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        onChangeText={(text) => {
          setInput(text);
        }}
        value={input}
        onEndEditing={handleEndEditing}
        placeholder="Restaurants, food"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",

    padding: 10,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
});
