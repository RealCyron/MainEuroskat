import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";

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

const Drawer = createDrawerNavigator();

SplashScreen.preventAutoHideAsync().catch(() => {
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function hideSplash() {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
  }, [appIsReady]);

  if (!appIsReady) {
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

  if (!isLoggedIn) {
    return (
      <Login
        onLoginSuccess={() => {
          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          drawerType: "slide", 
          drawerActiveTintColor: "#cd4c25",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerLabel: "Dashboard",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/dashboard.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Konto"
          component={Konto}
          options={{
            drawerLabel: "Konto",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/konto.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="News"
          component={News}
          options={{
            drawerLabel: "News",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/news.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Nachrichten"
          component={Nachrichten}
          options={{
            drawerLabel: "Nachrichten",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/nachrichten.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Beschwerden"
          component={Beschwerden}
          options={{
            drawerLabel: "Beschwerden",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/beschwerden.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Listen"
          component={Listen}
          options={{
            drawerLabel: "Listen",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/listen.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Turniere"
          component={Turniere}
          options={{
            drawerLabel: "Turniere",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/turniere.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Ranglisten"
          component={Ranglisten}
          options={{
            drawerLabel: "Ranglisten",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/ranglisten.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Qualifikationen"
          component={Qualifikationen}
          options={{
            drawerLabel: "Qualifikationen",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/qualifikationen.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Statistik"
          component={Statistik}
          options={{
            drawerLabel: "Statistik",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/statistik.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Einstellungen"
          component={Einstellungen}
          options={{
            drawerLabel: "Einstellungen",
            drawerIcon: () => (
              <Image
                source={require("./assets/icons/einstellungen.png")}
                style={styles.icon}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="TLobby"
          component={TLobby}
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="FLobby"
          component={FLobby}
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="CLobby"
          component={CLobby}
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="DLobby"
          component={DLobby}
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
