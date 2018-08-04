import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

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
    justifyContent: "center",
    alignItems: "center"
  },
  saveButton: {
    width: "30%",
    alignSelf: "center",
    elevation: 0,
    marginBottom: 20
  }
});

// configurable or can be requested from backend
const fields = [
  {
    type: "textInput",
    placeholder: "Full Name",
    key: "fullName",
    required: true
  },
  {
    type: "textInput",
    placeholder: "Address",
    key: "address"
  },
  {
    type: "textInput",
    placeholder: "Address line two",
    key: "addressLineTwo"
  },
  {
    type: "textInput",
    placeholder: "Town/City",
    key: "town"
  },
  {
    type: "textInput",
    placeholder: "Postcode/ZIP",
    key: "postcode"
  },
  {
    type: "textInput",
    placeholder: "Phone",
    key: "phone"
  },
  {
    type: "textInput",
    placeholder: "E-Mail Address",
    key: "email"
  }
];

/**
 * @class EditProfile
 * @extends Component
 */
class EditProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ color: "#fff" }}>Edit Profile</Text>
        </View>
        <ScrollView contentContainerStyle={styles.form}>
          <Form fields={fields} />
          <View style={styles.saveButton}>
            <Button title="Save" onPress={() => {}} color="#4CBB17" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default EditProfile;
