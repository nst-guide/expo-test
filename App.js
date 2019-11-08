import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import Geojson from './Geojson';
MapView.Geojson = Geojson

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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}>
          <Geojson geojson={myPlace} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
