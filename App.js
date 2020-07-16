import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import React from 'react';
import { Text } from 'react-native';
import Welcome from './app/screens/WelcomeScreen'

// https://stackoverflow.com/questions/51129444/how-to-hide-header-of-createstacknavigator-on-react-native

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  // Movies: { screen: Movies },
  // MoviesDetails: { screen: MoviesDetails },
},
  {
    initialRouteName: 'Welcome'
  });

const App = createAppContainer(AppNavigator)

export default App;