import Parse from "parse/react-native";
import { AsyncStorage } from "react-native";
Parse.setAsyncStorage(AsyncStorage);

import { PARSE_APP_ID, PARSE_SERVER_URL } from "react-native-dotenv";

Parse.initialize(PARSE_APP_ID);
Parse.serverURL = PARSE_SERVER_URL;

export class User extends Parse.User {
  constructor({username, password, email}) {
    super('User')

    // All other initialization
    this.username = username
    this.password = password
    this.email = email

    this.set('username', this.username)
    this.set('password', this.password)
    this.set('email', this.email)
  }
}
Parse.Object.registerSubclass("User", User);
