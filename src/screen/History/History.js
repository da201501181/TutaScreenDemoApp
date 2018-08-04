import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
    key: "orders",
    placeholder: "Orders",
    options: [
      { id: 0, label: "Order A", value: "orderA" },
      { id: 1, label: "Order B", value: "orderB" }
    ]
  },
  {
    type: "picker",
    key: "payables",
    placeholder: "Payables",
    options: [
      { id: 0, label: "Payable A", value: "payableA" },
      { id: 1, label: "Payable B", value: "payableB" }
    ]
  },
  {
    type: "picker",
    key: "payments",
    placeholder: "Payments",
    options: [
      { id: 0, label: "Payment A", value: "paymentA" },
      { id: 1, label: "Payment B", value: "paymentB" }
    ]
  },
  {
    type: "picker",
    key: "tickets",
    placeholder: "Tickets",
    options: [
      { id: 0, label: "Ticket A", value: "ticketA" },
      { id: 1, label: "Ticket B", value: "ticketB" }
    ]
  },
  {
    type: "picker",
    key: "invoice",
    placeholder: "Invoice",
    options: [
      { id: 0, label: "Invoice A", value: "invoiceA" },
      { id: 1, label: "Invoice B", value: "invoiceB" }
    ]
  },
  {
    type: "picker",
    key: "rating",
    placeholder: "Rating",
    options: [
      { id: 0, label: "Rating A", value: "ratingA" },
      { id: 1, label: "Rating B", value: "ratingB" }
    ]
  }
];

/**
 * @class History
 * @extends Component
 */
class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ color: "#fff", fontSize: 20 }}>History</Text>
        </View>
        <ScrollView contentContainerStyle={styles.form}>
          <FontAwesome name="history" size={100} style={{ marginBottom: 10 }} />
          <Form fields={fields} />
        </ScrollView>
      </View>
    );
  }
}

export default History;
