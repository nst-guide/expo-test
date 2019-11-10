import MapView from "react-native-maps";
import React from "React";
import { StyleSheet, Dimensions } from "react-native";
import Geojson from "./Geojson";
MapView.Geojson = Geojson;
import MapData from "../assets/map_data/track.json";

export class Map extends React.Component {
  render() {
    return (
      <MapView style={styles.mapStyle}>
        <Geojson geojson={MapData} />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
