import React from 'react';
import {
  SafeAreaView,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import { ScrollView } from 'react-native';
import { Drawer } from "react-native-paper";

import HomeScreen from "../screens/HomeScreen";
import RoutesScreen from "../screens/RoutesScreen";
import SignInScreen from "../screens/SignInScreen";
import SettingsScreen from '../screens/SettingsScreen';

const Menu = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    SignIn: { screen: SignInScreen },
    Routes: { screen: RoutesScreen }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Drawer.Item
            label="Map"
            active="true"
            onPress={() => props.navigation.navigate("Home")}
          />
          <Drawer.Item
            label="Settings"
            active="true"
            onPress={() => props.navigation.navigate("Settings")}
          />
          <Drawer.Item
            label="SignIn"
            active="true"
            onPress={() => props.navigation.navigate("SignIn")}
          />
          <Drawer.Item
            label="Routes"
            active="true"
            onPress={() => props.navigation.navigate("Routes")}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
);

export default createAppContainer(Menu);
