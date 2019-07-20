import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import AppIntroSlider from "react-native-app-intro-slider";
import Tabs from "./components/Tabs";
import test from "./components/test";
export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
      //To show the main page of the app
    };
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <Tabs />;
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginRight: 2
  },
  text: {
    color: "white",
    fontSize: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20
  },
  image2: {
    width: 360,
    height: 100,
    marginLeft: 20
  },
  image3: {
    width: 200,
    height: 400
  },
  text2: {
    marginBottom: 70,
    paddingTop: 60,
    fontSize: 20
  }
});

const slides = [
  {
    key: "s1",
    textStyle: styles.text,
    image: require("./assets/cfp-j.png"),
    imageStyle: styles.image,
    backgroundColor: "#98cb5a"
  },
  {
    key: "s2",
    text:
      "Code for palestine is a project that is implemented by PalTel Group Fondation in cooperation with Jawwal.                                                                                                      ...                                                                                                                    It aims th teach studant in field od CS and design thinking. studant who are selected will of the age of 14 years old",
    textStyle: styles.text2,
    image: require("./assets/cfp-j2.png"),
    imageStyle: styles.image2,
    backgroundColor: "#e3c600"
  },
  {
    key: "s3",
    text: "You will learn basic programming language {Python}",
    image: require("./assets/python123.png"),
    imageStyle: styles.image3,
    backgroundColor: "#670087"
  },
  {
    key: "s4",
    text: " You will learn how th make web {HTML,CSS,JS}",
    image: require("./assets/html1.png"),
    imageStyle: styles.image3,
    backgroundColor: "#0e92d8"
  },
  {
    key: "s5",
    text: "You will learn how to make apps {React Native}",
    image: require("./assets/react1.png"),
    imageStyle: styles.image3,
    backgroundColor: "#e3c600"
  }
];
