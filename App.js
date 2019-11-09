import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Geojson from "./Geojson";
MapView.Geojson = Geojson;
import MapData from "./assets/map_data/track.json";
import { Provider as PaperProvider } from "react-native-paper";
import { Appbar, Drawer, Text, Button } from "react-native-paper";
import {
  SafeAreaView,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="First Page" />
        </Appbar.Header>
        <MapView style={styles.mapStyle}>
          <Geojson geojson={MapData} />
        </MapView>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          icon="dots-horizontal"
          mode="contained"
          onPress={() => this.props.navigation.push("Details")}
        >
          Go to Details! again!
        </Button>
        <Button
          icon="home"
          mode="contained"
          onPress={() => this.props.navigation.navigate("Home")}
        >
          Home
        </Button>
        <Button
          icon="backspace"
          mode="contained"
          onPress={() => this.props.navigation.goBack()}
        >
          Back
        </Button>
      </View>
    );
  }
}

class First extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="First Page" />
        </Appbar.Header>
        <Text>First Page</Text>
      </View>
    );
  }
}

class Second extends React.Component {
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Second Page" />
        </Appbar.Header>
        <Text>Second Page</Text>
      </View>
    );
  }
}

const Menu = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    First: { screen: First },
    Second: { screen: Second }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Drawer.Item
            label="Map"
            active="true"
            onPress={() => props.navigation.navigate('Home')}
          />
          <Drawer.Item
            label="First Page"
            active="true"
            onPress={() => props.navigation.navigate("First")}
          />
          <Drawer.Item
            label="Second Page"
            active="true"
            onPress={() => props.navigation.navigate("Second")}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
);


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(Menu);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  safeAreaViewContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
