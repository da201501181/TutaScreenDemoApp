import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  picker: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    padding: 15,
    flex: 0.8
  },
  optionWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    padding: 20
  }
});

/**
 * @class Picker
 * @extends Component
 */
class Picker extends Component {
  state = {
    selectedOptionId: -1,
    showModal: false
  };

  /**
   * @description Toggles modal view
   * @memberof Picker
   */
  toggleModalView = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    const { options, placeholder, onValueChange, style } = this.props;
    const { selectedOptionId, showModal } = this.state;
    return (
      <View style={[styles.container, style]}>
        <Modal
          visible={showModal}
          onRequestClose={() => this.toggleModalView()}
        >
          <View>
            {options.map(option => {
              return (
                <TouchableWithoutFeedback
                  key={option.id}
                  onPress={() => {
                    this.setState({ selectedOptionId: option.id }, () => {
                      onValueChange(option.value);
                      this.toggleModalView();
                    });
                  }}
                >
                  <View style={styles.optionWrapper}>
                    <Text>{option.label}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </Modal>
        <TouchableOpacity
          onPress={this.toggleModalView}
          style={{
            flexDirection: "row"
          }}
        >
          <View style={styles.picker}>
            <Text>
              {selectedOptionId >= 0
                ? options[selectedOptionId].label
                : placeholder}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Ionicons name="ios-arrow-down" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Picker;
