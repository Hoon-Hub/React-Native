import React, { useState } from "react";
import { Text, Image, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Tabs from "./navigation/Tabs";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) => {
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });
};
export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };
  // preloading만 사용한다면 (다른 로직 처리 없이) useFonts, useAssets를 사용하는 것이 좋다.
  const [fonts, fontsError] = Font.useFonts(Ionicons.font);
  const [assets, assetsError] = useAssets([
    require("./my-dog.png"),
    "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  ]);

  // 다른 로직이 필요하다면
  // AppLoading 로직을 사용하는것이 좋다.
  const isDark = useColorScheme() === "dark";

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Tabs></Tabs>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
