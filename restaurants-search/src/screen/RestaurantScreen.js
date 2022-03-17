import { View, Text, FlatList, Dimensions } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const id = navigation.getParam("id");
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  log({ data, loading, error });

  return (
    <View>
      <FlatList
        data={data.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image source={{ uri: item }} />}
        style={{ height: imageHeight, width: imageWidth }}
      />
    </View>
  );
}
