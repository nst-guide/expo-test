import React from "react";
import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";

class SignInScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Settings"
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require("./notif-icon.png")}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // )
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="First Page" />
        </Appbar.Header>
        <Text>First Page</Text>
      </View>
    );
  }
}
export default SignInScreen;
