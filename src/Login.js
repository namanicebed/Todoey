import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff"
        }}
      >
        <View
          style={{
            flex: 0.55,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../assets/icons/onboarding.png")}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 0.45, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Rubik-Medium",
              color: "#554E8F",
              fontSize: 22,
              paddingTop: 30
            }}
          >
            Remainders made simple
          </Text>
          <View
            style={{
              width: Dimensions.get("window").width * 0.8,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Regular",
                fontSize: 16,
                paddingTop: 5,
                color: "#82A0B7"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              pellentesque erat in blandit luctus.
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => console.log("Pressed")}>
            <View
              style={{
                shadowColor: "#66C81C",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 15,
                elevation: 3
              }}
            >
              <LinearGradient
                colors={["#5DE61A", "#39A801"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  marginTop: 60,
                  width: Dimensions.get("window").width * 0.7,
                  borderRadius: 15,
                  height: 58,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-SemiBold",
                    fontSize: 15,
                    color: "#FCFCFC"
                  }}
                >
                  Get Started
                </Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
export default App;
