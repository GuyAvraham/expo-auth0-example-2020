import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import Anchor from "../components/anchor";
import BrowserModal from "../components/browserModal";
import { translated } from "../utils/localization";

function Main(props) {
  console.log("render");
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>{props.name}, {translated("Welcome")}</Text>
      <Anchor text={translated("Chat")} style={styles.chat} href="http://m.me/kbpuretest" />
      <BrowserModal
        text={translated("Shop")}
        style={styles.shop}
        href="https://gsjewelryhouse.com/"
      />
      <BrowserModal
        text={translated("Content")}
        style={styles.shop}
        href="http://15.188.181.32/"
      />
      <MaterialButtonViolet
        text1={translated("Logout")}
        style={styles.logout}
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
  chat: {
    width: 167,
    height: 36,
    marginTop: 100
  },
  shop: {
    width: 167,
    height: 36,
    marginTop: 100
  },
  logout: {
    width: 167,
    height: 36,
    marginTop: 200
  }
});

export default Main;
