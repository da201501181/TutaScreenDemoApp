import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 75,
    backgroundColor: "#F97D5A",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  icon: {
    margin: 10
  },
  title: {
    margin: 10,
    marginBottom: 14,
    fontSize: 20,
    color: "#fff"
  }
});

/**
 * @description Renders a form component
 * @param {Object} props Props passed from parent component
 */
const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <TouchableWithoutFeedback
          onPress={() =>
            props.navigateToScreen
              ? props.navigation.navigate(props.navigateToScreen)
              : props.navigation.openDrawer()
          }
        >
          {props.children}
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
export default Header;
