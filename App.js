import React from "react";
import MapView from "react-native-maps";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import Geojson from "./Geojson";
MapView.Geojson = Geojson;
import MapData from "./assets/map_data/track.json";
import { Provider as PaperProvider } from "react-native-paper";

const myPlace = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [64.165329, 48.844287]
      }
    }
  ]
};

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}>
          <Geojson geojson={MapData} />
        </MapView>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
