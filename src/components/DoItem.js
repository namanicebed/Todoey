import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import DelIcon from 'react-native-vector-icons/AntDesign';
import { CheckBox } from "react-native-elements";
import Swipeout from "react-native-swipeout";

class RightButton extends Component {
  render() {
    return (
      <View
        style={{
          height: 100,
          width: 70,
          backgroundColor: "#F9FCFF"
          // justifyContent: "center",
          // alignItems: "center"
        }}
      >
        <View
          style={{
            height: 45,
            width: 45,
            marginTop: 25,
            marginLeft: 10,
            borderRadius: 45 / 2,
            backgroundColor: "#FFCFCF",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name="delete" color="#FB3636" size={25} />
        </View>
      </View>
    );
  }
}

class DoItem extends Component {
  render() {
    var swipeoutBtns = [
      {
        component: <RightButton />
      }
    ];
    return (
        <Swipeout style={{ backgroundColor: "#F9FCFF" }} right={swipeoutBtns}>
          <View
            style={{
              height: 70,
              backgroundColor: "#fff",
              borderRadius: 5,
              marginLeft: 15,
              marginRight: 15,
              shadowColor: "#000",
              shadowOffset: { height: 1, width: 0 },
              shadowRadius: 15,
              shadowOpacity: 0.09,
              marginTop: 10,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                height: "100%",
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                shadowColor: this.props.indicatorColor,
                shadowOffset: { height: 0, width: 0.5 },
                shadowRadius: 5,
                shadowOpacity: 0.35,
                width: 5.4,
                backgroundColor: this.props.indicatorColor
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 0.12,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CheckBox
                  checkedColor="#91DC5A"
                  uncheckedColor="#B5B5B5"
                  checked={this.props.checked}
                  wrapperStyle={{ paddingLeft: 5 }}
                  onPress={this.props.onPress}
                />
              </View>
              <View
                style={{
                  flex: 0.2,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Rubik-Medium",
                    fontSize: 13,
                    color: "#C6C6C8"
                  }}
                >
                  {this.props.time}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.6,
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Rubik-Medium",
                    fontSize: 16,
                    textDecorationLine:
                      this.props.done === true ? "line-through" : "none",
                    paddingLeft: 5,
                    color: this.props.done === true ? "#D9D9D9" : "#554E8F"
                  }}
                >
                  {this.props.text}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 0.05
                }}
              >
                <Icon name="bell" size={16} color="#D9D9D9" />
              </View>
            </View>
          </View>
        </Swipeout>
    );
  }
}
export default DoItem;
