import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { UserContext } from "../UserContext";

export default function Dashboard({ navigation }) {

    const today = new Date().toLocaleDateString("de-DE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }); 
      
    const { userName } = useContext(UserContext);
    return (
        
    <View style={styles.container}>
        <Text style={styles.greeting}>
          Hallo, {userName || "Unbekannt"}!
        </Text>
        <Text style={styles.date}>
          Heute ist {today}.
        </Text>
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
      padding: 20,
    },
    greeting: {
      fontSize: 22,
      marginBottom: 1,
      fontWeight: "bold",
    },
    date: {
      fontSize: 16,
      marginBottom: 15,
    },
    boxRow: {
      flexDirection: "row",           
      justifyContent: "space-around", 
      flexWrap: "wrap",               
      alignItems: "center",
    },
    box: {
      width: "40%", 
      maxWidth: 200,
      backgroundColor: "#f0f0f0",
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
      alignItems: "center",
      borderWidth: 1,                 // Rahmen
      borderColor: "#999",            // Rahmenfarbe
    },
    boxTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 8,
    },
  });