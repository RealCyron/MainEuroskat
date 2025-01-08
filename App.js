import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";

// Importiere die Screens
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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Hauptmenüpunkte */}
      <TouchableOpacity onPress={() => props.navigation.navigate("Dashboard")}>
        <Text style={styles.menuItem}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Konto")}>
        <Text style={styles.menuItem}>Konto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("News")}>
        <Text style={styles.menuItem}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Nachrichten")}>
        <Text style={styles.menuItem}>Nachrichten</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Beschwerden")}>
        <Text style={styles.menuItem}>Beschwerden</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Listen")}>
        <Text style={styles.menuItem}>Listen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Turniere")}>
        <Text style={styles.menuItem}>Turniere</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Ranglisten")}>
        <Text style={styles.menuItem}>Ranglisten</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Qualifikationen")}>
        <Text style={styles.menuItem}>Qualifikationen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Statistik")}>
        <Text style={styles.menuItem}>Statistik</Text>
      </TouchableOpacity>

      {/* Menüpunkt am unteren Ende des Bildschirms */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Einstellungen")}>
          <Text style={styles.menuItem}>Einstellungen</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {/* Screens */}
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    fontSize: 16,
    padding: 10,
    marginVertical: 5,
    marginLeft: 10,
    color: "#333",
  },
  bottomMenu: {
    marginTop: "auto", // Positioniert das Element am unteren Ende
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});