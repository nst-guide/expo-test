import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MenuDrawerNavigator from './MenuDrawerNavigator';

import SignInScreen from "../screens/SignInScreen"
import AuthLoadingScreen from "../screens/AuthLoadingScreen"

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MenuDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

// export default createAppContainer(MenuDrawerNavigator);
