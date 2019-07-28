import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
  ScrollView
} from "react-native";
import SettingScreen from "./Settings";
import { SafeAreaView, createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";
import CloseIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import DoItem from "./components/DoItem";
import ModalScreen from "./ModalScreen";

class AddedHome extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="home" size={32} color={tintColor} />;
    }
  });
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onButtonPress = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F9FCFF" }}>
        <ImageBackground
          source={require("../assets/icons/ExpandedHeader.png")}
          resizeMode="cover"
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height * 0.3
          }}
        >
          <SafeAreaView />
          <View
            style={{
              backgroundColor: "transparent",
              flex: 0.4,
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
          <View
            style={{
              backgroundColor: "transparent",
              flex: 0.6,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.27)",
                width: "90%",
                height: 100,
                borderRadius: 5
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.6, padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Rubik-Medium",
                      paddingTop: 5,
                      color: "#fff"
                    }}
                  >
                    Today Reminder
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "OpenSans-Regular",
                      color: "#F3F3F3",
                      paddingTop: 5
                    }}
                  >
                    Meeting with client
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "OpenSans-Regular",
                      color: "#F3F3F3",
                      paddingTop: 5
                    }}
                  >
                    13:00 PM
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <CloseIcon
                    name="window-close"
                    color="#fff"
                    size={20}
                    style={{ alignSelf: "flex-end", padding: 5 }}
                  />
                  <Image
                    source={require("../assets/icons/bellIcon.png")}
                    resizeMode="contain"
                    style={{ width: 55, height: 55 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <ScrollView>
        <TextInput style={{height:20,width:100}}/>
          <Text
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: 15,
              margin: 15,
              color: "#8B87B3"
            }}
          >
            Today
          </Text>

          <DoItem
            indicatorColor="#F3E625"
            time="07:00 AM"
            text="Go jogging with Christin"
            checked={this.state.done}
            done={this.state.done}
            onPress={this.onButtonPress}
          />
          <DoItem
            indicatorColor="#1ED102"
            time="08:00 AM"
            text="Send project file"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <DoItem
            indicatorColor="#D10263"
            time="10:00 AM"
            text="Meeting with client"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <DoItem
            indicatorColor="#1ED102"
            time="13:00 PM"
            text="Email client"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <Text
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: 15,
              margin: 15,
              paddingTop: 10,
              color: "#8B87B3"
            }}
          >
            Tomorrow
          </Text>

          <DoItem
            indicatorColor="#F3E625"
            time="07:00 AM"
            text="Morning yoga"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <DoItem
            indicatorColor="#1ED102"
            time="08:00 PM"
            text="Send project file"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <DoItem
            indicatorColor="#D10263"
            time="10:00 AM"
            text="Email client"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <DoItem
            indicatorColor="#1ED102"
            time="13:00 PM"
            text="Meeting with client"
            // checked={this.state.done}
            // done={this.state.done}
          />
          <View style={{ marginBottom: 30 }} />
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default createBottomTabNavigator(
  {
    Home: {
      screen: AddedHome
    },
    Add: {
       screen:()=>null,
      navigationOptions: () => ({
        tabBarLabel: " ",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          console.log(navigation.navigate("Home"));
        },
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
    animationEnabled:true,
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
