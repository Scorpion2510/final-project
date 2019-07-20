import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
  TextInput,
  FlatList,
  ImageBackground
} from "react-native";

import Carousel from "react-native-snap-carousel";

export default class test extends React.Component {
  state = {
    color: "green",
    modalVisible: false,
    list: [
      {
        image: require("../assets/calcal.png"),
        Text: "Code for Palestine was born in 2015"
      },
      {
        image: require("../assets/camp.jpg"),
        Text: "jjj"
      },
      {
        image: require("../assets/2015.jpg"),
        Text: "jnkj"
      },
      {
        image: require("../assets/2015.jpg"),
        Text: "ljjlll"
      }
    ]
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.TextComponentStyle}>{item.Text}</Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/bbb.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <FlatList
            data={[{ key: "a" }]}
            renderItem={({ item }) => (
              <View>
                <Image
                  style={styles.header}
                  source={require("../assets/cfp-jg.png")}
                />
                <Text style={styles.title}> About The Programe : </Text>

                <Carousel
                  ref={c => {
                    this._carousel = c;
                  }}
                  data={this.state.list}
                  renderItem={this._renderItem}
                  sliderWidth={300}
                  itemWidth={300}
                />
                <Text style={styles.title}>
                  {" "}
                  The overarching goals of Code for Palestine are to:{" "}
                </Text>
                <Carousel
                  ref={c => {
                    this._carousel = c;
                  }}
                  data={this.state.list}
                  renderItem={this._renderItem}
                  sliderWidth={300}
                  itemWidth={300}
                />
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },
  TextComponentStyle: {
    borderRadius: 5,

    // Set border width.
    borderWidth: 2,

    // Set border Hex Color Code Here.
    borderColor: "#0e92d8",

    // Setting up Text Font Color.
    color: "#000000",

    // Adding padding on Text component.
    padding: 2,

    fontSize: 20,

    textAlign: "center",

    marginLeft: 50,

    margin: 10
  },
  header: {
    width: 360,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  image: {
    width: 360,
    height: 100,
    marginTop: 10,
    marginLeft: 50,
    marginBottom: 10
  },
  image2: {
    width: 300,
    height: 300,
    marginLeft: 32,
    marginTop: 30
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginTop: 30
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20
  },
  text1: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
    textAlign: "right",
    marginTop: 10
  },
  year: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginTop: 10
  },

  back: {
    width: 50,
    height: 50,
    marginLeft: 150
  }
});
