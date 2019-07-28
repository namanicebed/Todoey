import React, { Component } from "react";
import { Text, View,Image } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "Task",
    tabBarIcon: ({tintColor}) => {
      return <Icon name="grid" size={24} color={tintColor}/>;
    }
  });
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Setting</Text>
      </View>
    );
  }
}
export default SettingsScreen;
