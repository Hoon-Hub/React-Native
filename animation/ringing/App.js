import { StyleSheet, Text, View } from "react-native";
import { Feather } from "react-native-vector-icons";
import { MotiView } from "@motify";
import React from "react";

const _color = "#6E01EF";
const _size = 100;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: { alignItems: "center", justifyContent: "center" },
});
