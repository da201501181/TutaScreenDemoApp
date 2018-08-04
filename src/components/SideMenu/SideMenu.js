import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#3B4751",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  container: {
    flex: 1
  },
  setting: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#aaa",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    paddingTop: 30
  },
  myAccountWrapper: {
    alignItems: "center",
    backgroundColor: "#eee",
    paddingBottom: 25
  },
  itemStyle: {
    marginTop: 10,
    color: "#aaa"
  }
});

/**
 * @class SideMenu
 * @extends Component
 */
class SideMenu extends Component {
  navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <MaterialIcons name="lock-outline" size={60} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 30, marginLeft: 5 }}>
            in<Text style={{ fontWeight: "500" }}>trust</Text>
          </Text>
        </View>
        <View style={styles.myAccountWrapper}>
          <View
            style={{ flexDirection: "row", marginTop: 20, marginBottom: 10 }}
          >
            <FontAwesome
              name="user-circle"
              size={20}
              color="#aaa"
              style={{ flex: 0.2 }}
            />
            <Text style={{ flex: 0.7, color: "#aaa", fontWeight: "bold" }}>
              MY ACCOUNT
            </Text>
            <Ionicons name="ios-arrow-down" size={20} color="#F88160" />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text
              onPress={() => this.navigateToScreen("EditProfileScreen")}
              style={styles.itemStyle}
            >
              Edit Profile
            </Text>
            <Text
              onPress={() => this.navigateToScreen("PaymentScreen")}
              style={styles.itemStyle}
            >
              Payments
            </Text>
            <Text
              onPress={() => this.navigateToScreen("HistoryScreen")}
              style={styles.itemStyle}
            >
              History
            </Text>
            <Text
              onPress={() => this.navigateToScreen("ReferScreen")}
              style={styles.itemStyle}
            >
              Refer {"&"} Earn
            </Text>
            <Text style={styles.itemStyle}>FAQ</Text>
          </View>
        </View>
        <View style={styles.setting}>
          <MaterialIcons
            name="settings"
            size={30}
            color="#aaa"
            style={{ flex: 0.3 }}
          />
          <Text>SETTINGS</Text>
        </View>
      </View>
    );
  }
}

export default SideMenu;
