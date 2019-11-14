import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Map } from "../components/Map";
import DrawerButton from "../components/DrawerButton";
import AddContentButton from "../components/AddContentButton";
import FindWaypointsButton from "../components/FindWaypointsButton";
import { Portal, Provider } from "react-native-paper";

// TODO: Debug why adding <Portal> stops the FontAwesome icons from working
// I think you need to use <Portal> to get the FAB group to render at the right place on top of other objects
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map style={styles.map} />
        <DrawerButton onPress={() => this.props.navigation.toggleDrawer()} />
        <AddContentButton onPress={() => console.log("add content")} />
        {/* <FindWaypointsButton
              onPress={() => console.log("Find waypoints")}
            /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
