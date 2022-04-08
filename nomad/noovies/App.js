import React, { useState } from "react";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Tabs from "./navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // preloading만 사용한다면 (다른 로직 처리 없이) useFonts, useAssets를 사용하는 것이 좋다.
  const [fonts, fontsError] = Font.useFonts(Ionicons.font);
  const [assets, assetsError] = useAssets([
    require("./my-dog.png"),
    "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  ]);

  // 다른 로직이 필요하다면
  // AppLoading 로직을 사용하는것이 좋다.

  // if (!assets || !fonts) {
  //   return <AppLoading />;
  // }
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}
