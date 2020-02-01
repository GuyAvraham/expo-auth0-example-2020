import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Entrance(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/image_L1GT..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialButtonDark
        text1="Login"
        style={styles.materialButtonDark}
        onPress={() => {
          console.log('click');
          props.onLogin();
        }}
      ></MaterialButtonDark>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 211,
    height: 251,
    marginTop: 28,
    alignSelf: "center"
  },
  materialButtonDark: {
    width: 263,
    height: 169,
    marginTop: 206,
    alignSelf: "center"
  }
});

export default Entrance;
