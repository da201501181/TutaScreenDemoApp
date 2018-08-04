import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    backgroundColor: "#3B4751",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  image: {
    alignItems: "center"
  },
  codeWrapper: {
    alignItems: "center"
  },
  shareButton: {
    width: "20%",
    alignSelf: "center"
  }
});

/**
 * @class Refer
 * @extends Component
 */
class Refer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Refer {"&"} Earn</Text>
        </View>
        <View style={styles.image}>
          <Image
            source={require("../../assets/Refer&Earn.png")}
            style={{ marginTop: 10 }}
          />
        </View>
        <View
          style={[styles.title, { backgroundColor: "#fff", marginTop: 30 }]}
        >
          <Text>Your Referal Code</Text>
        </View>
        <View style={styles.codeWrapper}>
          <Text style={{ fontSize: 60 }}>JQ4INT</Text>
        </View>
        <View style={styles.shareButton}>
          <Button title="SHARE" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

export default Refer;
