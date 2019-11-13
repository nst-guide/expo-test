import React from "react";

import { SafeAreaView, createDrawerNavigator } from "react-navigation";
import { ScrollView } from "react-native";
import { Drawer } from "react-native-paper";

import {
  HomeScreen,
  RoutesScreen,
  AuthStartScreen,
  SettingsScreen,
} from '../screens'

const MenuDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    AuthStart: { screen: AuthStartScreen },
    Routes: { screen: RoutesScreen }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Drawer.Item
            icon="map"
            label="Map"
            active="true"
            onPress={() => props.navigation.navigate("Home")}
          />
          <Drawer.Item
            icon="route"
            label="Routes"
            active="true"
            onPress={() => props.navigation.navigate("Routes")}
          />
          <Drawer.Item
            icon="cog"
            label="Settings"
            active="true"
            onPress={() => props.navigation.navigate("Settings")}
          />
          <Drawer.Item
            icon="sign-in-alt"
            label="Sign In"
            active="true"
            onPress={() => props.navigation.navigate("AuthStart")}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
);
export default MenuDrawerNavigator;
