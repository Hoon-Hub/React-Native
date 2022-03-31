import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Reels from "./src/screens/Reels";
import Activity from "./src/screens/Activity";
import Profile from "./src/screens/Profile";

export default function App() {
  let [loaded] = useFonts({
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Reels") {
              iconName = focused
                ? "caret-forward-circle-sharp"
                : "caret-forward-circle-outline";
            } else if (route.name === "Activity") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
