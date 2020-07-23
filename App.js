import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Text } from 'react-native';
import Welcome from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import DiscoverScreen from './app/screens/DiscoverScreen';

// https://stackoverflow.com/questions/51129444/how-to-hide-header-of-createstacknavigator-on-react-native

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  DiscoverScreen: {
    screen: DiscoverScreen,
    navigationOptions: {
      header: null,
    },
  },
},
  {
    initialRouteName: 'Welcome'
  });

const App = createAppContainer(AppNavigator)

export default App;