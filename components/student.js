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

export default class student extends React.Component {
  state = {
    modalVisible: false,
    modalVisible2: false,
    modalVisible3: false,
    modalVisible4: false,
    modalVisible5: false
  };

  // ******************************** modalVisible ***********************************

  y1 = () => {
    this.setState({ modalVisible: true });
  };

  y1_c = () => {
    this.setState({ modalVisible: false });
  };
  y2 = () => {
    this.setState({ modalVisible2: true });
  };

  y2_c = () => {
    this.setState({ modalVisible2: false });
  };

  y3 = () => {
    this.setState({ modalVisible3: true });
  };

  y3_c = () => {
    this.setState({ modalVisible3: false });
  };
  alumnus = () => {
    this.setState({ modalVisible4: true });
  };

  alumnus_c = () => {
    this.setState({ modalVisible4: false });
  };
  alumnus2 = () => {
    this.setState({ modalVisible5: true });
  };

  alumnus2_c = () => {
    this.setState({ modalVisible5: false });
  };

  // ******************************** modalVisible ***********************************

  render() {
    return (
      // ******************************** click  ***********************************
      <ImageBackground
        source={require("../assets/bbb.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <FlatList
          data={[{ key: "a" }]}
          renderItem={({ item }) => (
            <View>
              <Image
                style={styles.image}
                source={require("../assets/cfp-jg.png")}
              />
              <Text style={styles.title}> Students </Text>

              <TouchableOpacity onPress={this.y1}>
                <Image
                  style={styles.image2}
                  source={require("../assets/y3-b.png")}
                />
                <Text style={styles.year}>Y3</Text>
                <Text style={styles.year}>(2017-2019)</Text>
                <Text style={styles.year}>_________________</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.y2}>
                <Image
                  style={styles.image2}
                  source={require("../assets/y2-b.png")}
                />
                <Text style={styles.year}>Y2</Text>
                <Text style={styles.year}>(2018-2020)</Text>
                <Text style={styles.year}>_________________</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.y3}>
                <Image
                  style={styles.image2}
                  source={require("../assets/y1-a.png")}
                />
                <Text style={styles.year}>Y1</Text>
                <Text style={styles.year}>(2019-2021)</Text>
                <Text style={styles.year}>_________________</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.alumnus}>
                <Image
                  style={styles.image2}
                  source={require("../assets/a2-b.png")}
                />
                <Text style={styles.year}>Alumni 2</Text>
                <Text style={styles.year}>This groud graduated in (2018)</Text>
                <Text style={styles.year}>_________________</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.alumnus2}>
                <Image
                  style={styles.image2}
                  source={require("../assets/a1-b.png")}
                />
                <Text style={styles.year}>Alumni 1</Text>
                <Text style={styles.year}>This groud graduated in (2017)</Text>
              </TouchableOpacity>

              <Modal animationType="slide" visible={this.state.modalVisible}>
                <ImageBackground
                  source={require("../assets/bbb.png")}
                  style={{ width: "100%", height: "100%" }}
                >
                  <FlatList
                    data={[{ key: "a" }]}
                    renderItem={({ item }) => (
                      <View>
                        <Image
                          style={styles.image}
                          source={require("../assets/cfp-jg.png")}
                        />

                        <TouchableOpacity onPress={this.y1_c}>
                          <Image
                            style={styles.back}
                            source={require("../assets/back.png")}
                          />
                        </TouchableOpacity>
                        <Image
                          style={styles.image2}
                          source={require("../assets/Y3/moh.png")}
                        />
                        <Text style={styles.year}> Mohammed Almadani</Text>
                        <Text style={styles.year}>_________________</Text>

                        <Image
                          style={styles.image2}
                          source={require("../assets/Y3/abood.png")}
                        />
                        <Text style={styles.year}> Abdulqader ouda</Text>
                        <Text style={styles.year}>_________________</Text>

                        <Image
                          style={styles.image2}
                          source={require("../assets/Y3/osama2.png")}
                        />
                        <Text style={styles.year}> osama alosta</Text>
                        <Text style={styles.year}>_________________</Text>

                        <Image
                          style={styles.image2}
                          source={require("../assets/Y3/khaled.png")}
                        />
                        <Text style={styles.year}> khaled al Qefary</Text>
                        <Text style={styles.year}>_________________</Text>

                        <Image
                          style={styles.image2}
                          source={require("../assets/Y3/sia.png")}
                        />
                        <Text style={styles.year}> Heba shada</Text>
                        <Text style={styles.year}>_________________</Text>

                        <Image
                          style={styles.image2}
                          source={require("../assets/Y3/amna.png")}
                        />
                        <Text style={styles.year}> Amna abo samhadana</Text>
                        <Text style={styles.year}>_________________</Text>
                      </View>
                    )}
                  />
                </ImageBackground>
              </Modal>

              <Modal animationType="slide" visible={this.state.modalVisible2}>
                <View>
                  <Text>hi in my modaljggvcchff</Text>
                  <TouchableOpacity onPress={this.y2_c}>
                    <Text> y2 test</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <Modal animationType="slide" visible={this.state.modalVisible3}>
                <View>
                  <Text>hi in my modal</Text>
                  <TouchableOpacity onPress={this.y3_c}>
                    <Text> y3 test</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <Modal animationType="slide" visible={this.state.modalVisible4}>
                <View>
                  <Text>hi in my modaljggvcchff</Text>
                  <TouchableOpacity onPress={this.alumnus_c}>
                    <Text> alumnus test</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <Modal animationType="slide" visible={this.state.modalVisible5}>
                <View>
                  <Text>hi in my modal</Text>
                  <TouchableOpacity onPress={this.alumnus2_c}>
                    <Text> alumnus2 test</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
          )}
        />
      </ImageBackground>

      // ******************************** click  ***********************************
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  image2: {
    width: 300,
    height: 300,
    marginLeft: 32,
    marginTop: 30
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20
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
