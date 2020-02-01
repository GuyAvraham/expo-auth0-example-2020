import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function onCatalogClick() {
  console.log("catalog");
}

function Main(props) {
  console.log("render");
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>{props.name}, Welcome back</Text>
      <MaterialButtonViolet
        text1="Logout"
        style={styles.materialButtonViolet}
        onPress={props.logout}
      ></MaterialButtonViolet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 25,
    // fontFamily: "roboto-regular",
    marginTop: 125,
    alignSelf: "center"
  },
  materialButtonViolet: {
    width: 167,
    height: 36,
    marginTop: 584,
    marginLeft: 177
  }
});

export default Main;
