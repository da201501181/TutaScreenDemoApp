import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "stretch"
  }
});

/**
 * @description Renders home screen
 * @param {Object} props Props passed from parent component
 */
const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/getStarted.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default Home;
