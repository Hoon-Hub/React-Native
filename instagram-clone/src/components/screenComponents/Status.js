import { View, Text, StatusBar, Image } from "react-native";
import React from "react";

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: "95%",
          borderWidth: 1,
          backgroundColor: "gray",
          position: "absolute",
          top: 18,
        }}
      >
        <View
          style={{ hieght: "100%", backgroundColor: "white", width: "50%" }}
        ></View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 10,
          left: 0,
          width: "90%",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: "orange",
              resizeMode: "cover",
              width: "92%",
              height: "92%",
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, paddingLeft: 10 }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Status;
