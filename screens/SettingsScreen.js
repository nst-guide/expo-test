import React from "react";
import { View } from "react-native";
import { Appbar, Text, Button } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ExpandingButton from "../components/ExpandingButton";

class SettingsScreen extends React.Component {
  state = {
    isCollapsed: true
  };

  static navigationOptions = {
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => <FontAwesome5 name="cog" color={tintColor} />
  };

  handleClick() {
    console.log(this.state)
    console.log(this.state.isCollapsed)
    console.log(!this.state.isCollapsed);
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

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
        <Text>Here's an expanding button:</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => this.handleClick()}
        >
          Expand
        </Button>
        <ExpandingButton collapsed={this.state.isCollapsed} />
      </View>
    );
  }
}
export default SettingsScreen;
