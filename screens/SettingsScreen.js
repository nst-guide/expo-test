import React from "react";
import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => <FontAwesome5 name="cog" color={tintColor} />
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Settings" />
        </Appbar.Header>
        <Text>App settings</Text>
      </View>
    );
  }
}
export default SettingsScreen;
