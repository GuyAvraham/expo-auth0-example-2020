import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

export default function Background(props) {
  let source = require("../assets/back-blur-3.mp4");
  return (
    <View style={styles.container}>
      <Video
        source={source}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    backgroundColor: "transparent"
    // alignItems: "stretch",
    // justifyContent: "space-between"
  },
  baseText: {},
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "transparent"
  }
});
