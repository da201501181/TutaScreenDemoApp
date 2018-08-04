import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigation from "./src/route";

export default class App extends React.Component {
  render() {
    return <DrawerNavigation />;
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
