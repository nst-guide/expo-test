import React from "react";
import { View, Button, StyleSheet, AsyncStorage } from "react-native";
import { Appbar, Text } from "react-native-paper";

// import { PARSE_APP_ID, PARSE_SERVER_URL } from "react-native-dotenv";
// console.log(PARSE_APP_ID);
// console.log(PARSE_SERVER_URL);

// import Parse from "parse/react-native";
// Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize(PARSE_APP_ID);
// Parse.serverURL = PARSE_SERVER_URL;

// var GameScore = Parse.Object.extend("GameScore");
// var gameScore = new GameScore();

// gameScore.set("score", 1337);
// gameScore.set("playerName", "Sean Plott");
// gameScore.set("cheatMode", false);

// gameScore.save().then(
//   gameScore => {
//     // Execute any logic that should take place after the object is saved.
//     alert("New object created with objectId: " + gameScore.id);
//   },
//   error => {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and message.
//     alert("Failed to create new object, with error code: " + error.message);
//   }
// );


class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Home");
  };
}

// class SignInScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: "Settings"
//     // drawerIcon: ({ tintColor }) => (
//     //   <Image
//     //     source={require("./notif-icon.png")}
//     //     style={[styles.icon, { tintColor: tintColor }]}
//     //   />
//     // )
//   };

//   render() {
//     return (
//       <View>
//         <Appbar.Header>
//           <Appbar.Action
//             icon="menu"
//             onPress={() => this.props.navigation.toggleDrawer()}
//           />
//           <Appbar.Content title="Sign In" />
//         </Appbar.Header>
//         <Text>First Page</Text>
//       </View>
//     );
//   }
// }


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

// More code like OtherScreen omitted for brevity


export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
