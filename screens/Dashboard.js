import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Base64 } from "js-base64";
import { UserContext } from "../UserContext";

export default function Dashboard({ navigation }) {

    const today = new Date().toLocaleDateString("de-DE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }); 
      
    const { userName, authToken } = useContext(UserContext);
    const auth = Base64.encode("admin:mV7DnDVPgX")

    const [TBalance, setTBalance] = useState(null);
    const [FBalance, setFBalance] = useState(null);
    const [CBalance, setCBalance] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function GetBalance() {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch("https://api.staging.euroskat.com/api/v1.0/balances", {
          method: "GET",
          headers: {
            "euroskat-token": authToken,
            "Authorization": "Basic " + auth,
          },
        });
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(json.message || "Datenabruf fehlgeschlagen");
        }
        
        setTBalance(data.balances.tour);
        setFBalance(data.balances.fun);
        setCBalance(data.balances.club);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    useEffect(() => {
      if (authToken) {
        GetBalance();
      }
    }, [authToken]);

    return (
    
    <View style={styles.container}>
      <Text style={styles.greeting}>Hallo, {userName || "Unbekannt"}!</Text>
      <Text style={styles.date}>Heute ist {today}.</Text>
      <Text style={styles.balance}>Euro: {TBalance}€ Fun: {FBalance}$ Club: {CBalance}€</Text>
      <View style={styles.boxContainer}>  
        
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
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: "center",
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
    balance: {
      fontSize: 10,
      marginBottom: 15,
    },
    boxContainer: {
      flexDirection: "row",           
      justifyContent: "space-around", 
      flexWrap: "wrap",               
      alignItems: "center",
    },
    box: {
      width: "45%", 
      maxWidth: 800,
      backgroundColor: "#f0f0f0",
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
      alignItems: "center",
      borderWidth: 1,                 
      borderColor: "#999",            
    },
    boxTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 8,
    },
  });