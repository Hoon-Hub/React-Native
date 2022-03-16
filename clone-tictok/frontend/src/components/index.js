import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

export default function AuthMenu() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Log in</Text>
        <TouchableOpacity name="user" size={24} style={styles.providerButton}>
          <Text style={styles.providerButtonText}>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>
    </View>
  );
}
