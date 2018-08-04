import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import Form from "../../components/Form";

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
  form: {
    flexGrow: 1,
    alignItems: "center"
  }
});

// configurable or can be requested from backend
const fields = [
  {
    type: "picker",
    key: "savedCards",
    placeholder: "Saved Cards",
    options: [
      { id: 0, label: "Card A", value: "cardA" },
      { id: 1, label: "Card B", value: "cardB" }
    ]
  },
  {
    type: "picker",
    key: "mobileWallets",
    placeholder: "Mobile Wallets",
    options: [
      { id: 0, label: "Wallet A", value: "WalletA" },
      { id: 1, label: "Wallet B", value: "WalletB" }
    ]
  },
  {
    type: "button",
    key: "intrustAccBalance",
    placeholder: "Intrust Account Balance"
  },
  {
    type: "button",
    key: "viewBalance",
    placeholder: "View Balance"
  },

  {
    type: "button",
    key: "addBalance",
    placeholder: "Add Balance",
    icon: true
  }
];

/**
 * @class Payment
 * @extends Component
 */
class Payment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Payments</Text>
        </View>
        <ScrollView contentContainerStyle={styles.form}>
          <Image
            source={require("../../assets/payment.png")}
            style={{ marginTop: 10 }}
          />
          <Form fields={fields} />
        </ScrollView>
      </View>
    );
  }
}

export default Payment;
