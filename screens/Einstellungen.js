import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Einstellungen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hier sind die Einstellungen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
