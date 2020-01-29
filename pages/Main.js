import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

function onCatalogClick() {
  console.log("catalog");
}

function Main(props) {
  console.log("render");
  return (
    <View style={styles.container}>
      <View style={styles.image1Stack}>
        <Image
          source={require("../assets/images/image_L1GT..png")}
          resizeMode="contain"
          style={styles.image1}
        />
        <Button title="logout" onPress={props.logout}>
          Log Out
        </Button>
        <TouchableOpacity
          onPress={() => {
            console.log("test");
          }}
          onTouch={() => {
            console.log("test");
          }}
        >
          <Image
            source={require("../assets/images/image_a8gV..png")}
            resizeMode="contain"
            style={styles.image2}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/image_Y0Kx..png")}
          resizeMode="contain"
          style={styles.image3}
        />
        <Image
          source={require("../assets/images/image_nBuW..png")}
          resizeMode="contain"
          style={styles.image4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    top: 0,
    width: 211,
    height: 251,
    position: "absolute",
    left: 118
  },
  image2: {
    top: 164,
    left: 47,
    width: 195,
    height: 173,
    position: "absolute"
  },
  image3: {
    top: 165,
    left: 224,
    width: 164,
    height: 170,
    position: "absolute"
  },
  image4: {
    top: 326,
    width: 446,
    height: 446,
    position: "absolute",
    left: 0
  },
  image1Stack: {
    width: 446,
    height: 772,
    marginTop: 28,
    marginLeft: -36
  }
});

export default Main;
