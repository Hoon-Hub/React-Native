import { StatusBar, View, Text, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from "@expo-google-fonts/inter";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import Stories from "../components/screenComponents/Stories";
import Post from "../components/screenComponents/Post";

const Home = () => {
  let [loaded] = useFonts({
    "Lobster-Regular": require("../../assets/fonts/Lobster-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          style={{
            fontFamily: "Lobster-Regular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Ionic
            name="reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
