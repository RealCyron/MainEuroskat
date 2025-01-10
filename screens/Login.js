import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Einfacher "Login-Handler"
  function handleLogin() {
    // Hier könntest du z.B. den API-Call machen und verifizieren
    // Wir nehmen hier an, dass alles erfolgreich ist:
    onLoginSuccess();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitte einloggen</Text>

      <TextInput
        style={styles.input}
        placeholder="Nutzername"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Passwort"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});