import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";

// Initialize Firebase
initializeApp(Constants.manifest.web.config.firebase);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Subscribe to simcoder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
