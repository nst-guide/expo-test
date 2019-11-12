import React from "react";
import { View, StyleSheet } from "react-native";
import { Map } from "../components/Map";
import DrawerButton from "../components/DrawerButton";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map style={styles.map} />
        <DrawerButton onPress={() => this.props.navigation.toggleDrawer()} />
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
  }
});
