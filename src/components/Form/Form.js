import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";

import Picker from "../Picker";
import Button from "../Button";

const styles = StyleSheet.create({
  defaultTextInput: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 20,
    elevation: 1
  }
});

/**
 * @description Renders a form component
 * @param {Object} props Props passed from parent component
 */
const Form = props => (
  <View style={{ width: "80%" }}>
    <Formik
      initialValues={{ fields: props.fields, proceedButtonDisabled: false }}
      isInitialValid={false}
      validate={values => {
        let errors = {};
        props.fields.map(field => {
          if (field.required && values[field.key].length === 0) {
            errors = {
              ...errors,
              [field.key]: "Required"
            };
          }
        });
        return errors;
      }}
      onSubmit={({ fields, proceedButtonDisabled, ...formData }) => {
        fields.map(field => {
          if (!formData[field.key]) {
            formData = {
              ...formData,
              [field.key]: ""
            };
          }
        });
        props.handleSubmit(formData);
      }}
      render={({ values, handleSubmit, setFieldValue, isValid, errors }) => (
        <View>
          {values.fields.map((field, index) => {
            switch (field.type) {
              case "textInput":
                return (
                  <View key={field.key}>
                    <TextInput
                      style={styles.defaultTextInput}
                      name={field.key}
                      onChangeText={value => setFieldValue(field.key, value)}
                      value={values[field.key]}
                      underlineColorAndroid="transparent"
                      placeholder={field.placeholder}
                    />
                    {errors[field.key] ? (
                      <Text style={{ color: "red" }}>{errors[field.key]}</Text>
                    ) : null}
                  </View>
                );
              case "picker":
                return (
                  <Picker
                    key={field.key}
                    options={field.options}
                    placeholder={field.placeholder}
                    onValueChange={value => setFieldValue(field.key, value)}
                  />
                );
              case "button":
                return (
                  <Button
                    key={field.key}
                    title={field.placeholder}
                    icon={field.icon}
                    onPress={() => {}}
                  />
                );
            }
          })}
        </View>
      )}
    />
  </View>
);

export default Form;
