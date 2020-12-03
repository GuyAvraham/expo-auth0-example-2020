import { Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import * as React from "react";

const Logo = props => (
  <TouchableOpacity style={props.style} onPress={props.onPress}>
    <Image
      source={require("../assets/images/logo-large.png")}
      resizeMode="contain"
      style={styles.logo}
    />
  </TouchableOpacity>
);

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  logo: {
    height: undefined,
    width: deviceWidth / 2.8,
    aspectRatio: 1,
  }
});

export default Logo;
