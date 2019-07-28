import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
class ModalScreen extends React.Component {
  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
      >
        <View
          style={{
            flex:1
          }}
        >
          <Text>Testing a modal with transparent background</Text>
        </View>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    modalScreen: {
      screen: ModalScreen
    }
  },
   {
    mode: "modal",
  }
);
