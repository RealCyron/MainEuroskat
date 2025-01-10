import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";

// Screens
import Dashboard from "./screens/Dashboard";
import Konto from "./screens/Konto";
import News from "./screens/News";
import Nachrichten from "./screens/Nachrichten";
import Beschwerden from "./screens/Beschwerden";
import Listen from "./screens/Listen";
import Turniere from "./screens/Turniere";
import Ranglisten from "./screens/Ranglisten";
import Qualifikationen from "./screens/Qualifikationen";
import Statistik from "./screens/Statistik";
import Einstellungen from "./screens/Einstellungen";
import Login from "./screens/Login";
import TLobby from "./screens/TLobby";
import FLobby from "./screens/FLobby";
import CLobby from "./screens/CLobby";
import DLobby from "./screens/DLobby";

import ProgressBar from "./components/ProgressBar";

// Drawer
const Drawer = createDrawerNavigator();

// Verhindern, dass Expo den Splashscreen automatisch ausblendet
SplashScreen.preventAutoHideAsync().catch(() => {
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // Neuer State: Ist der Nutzer eingeloggt?
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simuliere kurzen Ladevorgang (z.B. 2 Sekunden)
    const timer = setTimeout(() => {
      setAppIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Splashscreen ausblenden, sobald appIsReady == true
  useEffect(() => {
    async function hideSplash() {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [appIsReady]);

  // Wenn die App lädt, können wir noch unseren Splash-Inhalt rendern
  // (falls du ein eigenes, manuelles Splash-Design anzeigst)
  const onLayoutRootView = useCallback(async () => {
    // Keine weitere Logik nötig, wenn appIsReady == true
  }, [appIsReady]);

  if (!appIsReady) {
    // Zeige Splash-Layout
    return (
      <View style={styles.splashContainer} onLayout={onLayoutRootView}>
        <Image
          source={require("./assets/splash_logo.png")}
          style={styles.logo}
        />
        <ProgressBar progress={50} />
        <Text>Lädt...</Text> 
      </View>
    );
  }

  // Ab hier ist appIsReady == true, wir entscheiden:
  // Ist der User eingeloggt? Wenn nein -> Login-Screen
  if (!isLoggedIn) {
    return (
      <Login
        onLoginSuccess={() => {
          setIsLoggedIn(true);
        }}
      />
    );
  }

  // Ist der Nutzer eingeloggt -> Drawer mit deinen Screens anzeigen
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Konto" component={Konto} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Nachrichten" component={Nachrichten} />
        <Drawer.Screen name="Beschwerden" component={Beschwerden} />
        <Drawer.Screen name="Listen" component={Listen} />
        <Drawer.Screen name="Turniere" component={Turniere} />
        <Drawer.Screen name="Ranglisten" component={Ranglisten} />
        <Drawer.Screen name="Qualifikationen" component={Qualifikationen} />
        <Drawer.Screen name="Statistik" component={Statistik} />
        <Drawer.Screen name="Einstellungen" component={Einstellungen} />
        <Drawer.Screen name="TLobby" component={TLobby} />
        <Drawer.Screen name="FLobby" component={FLobby} />
        <Drawer.Screen name="CLobby" component={CLobby} />
        <Drawer.Screen name="DLobby" component={DLobby} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
