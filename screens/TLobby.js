import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TLobby() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen in der Turnier Lobby!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});