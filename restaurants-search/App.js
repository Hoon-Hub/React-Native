import { createStackNavigationContainer } from "react-navigation";
import HomeScreen from "./src/screen/HomeScreen";
import RestaurantScreen from "./src/screen/RestaurantScreen";

const navigator = createStackNavigationContainer(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);

export default createAppContainer(navigator);
