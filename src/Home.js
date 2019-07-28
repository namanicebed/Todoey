import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar
} from "react-native";
import SettingScreen from "./Settings";
import { SafeAreaView, createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="home" size={32} color={tintColor}/>;
    }
  });
  render() {
    return (
      <View style={{ backgroundColor: "#F9FCFF", flex: 1 }}>
        <ImageBackground
          source={require("../assets/icons/header.png")}
          resizeMode="cover"
          style={{ width: Dimensions.get("screen").width, height: 120 }}
        >
          <StatusBar backgroundColor="transparent" animated />
          <SafeAreaView />
          <View
            style={{
              backgroundColor: "transparent",
              height: 90,
              flexDirection: "row"
            }}
          >
            <View
              style={{ flex: 0.5, paddingLeft: 20, justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontFamily: "Rubik-Medium"
                }}
              >
                Hello Brenda!
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontFamily: "Rubik-Medium"
                }}
              >
                Have a nice Monday
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                paddingRight: 20,
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <Image
                source={require("../assets/icons/Avatar.png")}
                style={{ height: 45, width: 45 }}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../assets/icons/NoTask.png")}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 22,
                paddingTop: 50,
                color: "#554E8F"
              }}
            >
              No Tasks
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 17,
                paddingTop: 10,
                color: "#82A0B7"
              }}
            >
              You have no task to do.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Add: {
      screen: () => null,
      navigationOptions: () => ({
        tabBarLabel: " ",
        tabBarOnPress:()=>{},
        tabBarIcon: ({ tintColor }) => (
          <View
            style={{
              shadowColor: "#F456C3",
              shadowOffset: { width: 0, height: 7 },
              shadowOpacity: 0.6,
              shadowRadius: 5,
              elevation: 3
            }}
          >
            <LinearGradient
              colors={["#F857C3", "#E0139C"]}
              style={{
                height: 55,
                width: 55,
                borderRadius: 55 / 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E0139C",
                marginBottom: 40
              }}
            >
              <Image source={require("../assets/icons/AddIcon.png")} />
            </LinearGradient>
          </View>
        )
      })
    },
    Settings: {
      screen: SettingScreen
    }
  },
  {
    initialRouteName: "Home",
    activeTintColor: "#5F87E7",
    inactiveTintColor: "#bebebe",
    tabBarOptions: {
      labelStyle: {
        fontSize: 10,
        fontFamily: "Rubik-Medium"
      },
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
        shadowColor: "#888888",
        shadowOffset: { height: 0, width: 1 },
        shadowOpacity: 0.1
      },
      tabStyle: {
        backgroundColor: "#fff",
        paddingTop: 3
      }
    }
  }
);
