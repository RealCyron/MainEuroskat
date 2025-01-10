import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Turnier Lobby</Text>
        <Button
          title="Gehe zur Turnier Lobby"
          onPress={() => navigation.navigate("TLobby")}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Fun Lobby</Text>
        <Button
          title="Gehe zur Fun Lobby"
          onPress={() => navigation.navigate("FLobby")}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Club Lobby</Text>
        <Button
          title="Gehe zur Club Lobby"
          onPress={() => navigation.navigate("CLobby")}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>DSKV Lobby</Text>
        <Button
          title="Gehe zur DSKV Lobby"
          onPress={() => navigation.navigate("DLobby")}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",            
      justifyContent: "space-around",
      alignItems: "center",
      padding: 10,
    },
    box: {
      width: "40%",                
      height: 120,
      backgroundColor: "#f0f0f0",
      borderRadius: 8,
      marginBottom: 10,
      padding: 10,
      alignItems: "center",
      justifyContent: "space-between",
    },
    boxTitle: {
      fontSize: 14,
      fontWeight: "bold",
    },
  });