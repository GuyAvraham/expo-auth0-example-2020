import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const DrawerIcon = props => (
  <TouchableOpacity
    style={props.style}
    onPress={props.onPress}
  >
    <Image
      source={require("../../assets/hamburger.png")}
      resizeMode="contain"
      style={styles.logo}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35
  }
});

export default DrawerIcon;
