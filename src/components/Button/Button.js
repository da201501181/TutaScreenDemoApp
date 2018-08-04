import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    flexDirection: "row"
  }
});

/**
 * @description Renders a form component
 * @param {Object} props Props passed from parent component
 */
const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ width: "100%", alignItems: "center" }}
    >
      <View style={styles.button}>
        <Text style={{ flex: 1 }}>{props.title}</Text>
        {props.icon ? <Entypo name="plus" size={20} color="#D85254" /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
