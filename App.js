import React from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log("in app");
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "center",  // Main
    alignItems: "flex-end", // Secondary
    flexWrap: "wrap",
    alignContent: "center",  // Only when using flexWrap
  },
});
