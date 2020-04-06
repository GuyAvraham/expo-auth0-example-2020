import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import KBTitle from "./KBTitle";
import { translated } from "../Utils/Localization";
import { Linking } from "expo";

const region = {
  latitude: 31.99246,
  longitude: 34.76881
};

function WazeLink(props) {
  const onPress = () =>
    Linking.openURL(
      "https://www.waze.com/ul?ll=31.99248040%2C34.76848100&navigate=yes"
    );
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#2B2E34",
        borderRadius: 13,
        ...props.style
      }}
      onPress={onPress}
    >
      {/*<View style={{flex: 1}}/>*/}
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{flex: 0.3}}/>
        <Image
          source={require("../assets/navPage/waze.png")}
          resizeMode="contain"
          style={{
            // width: 100, height: 100,
            // width: undefined,
            // height: undefined,
            flex: 0.6
          }}
        />
        <KBTitle style={{ flex: 1, color: "#FFFFFF" }}>
          {translated("NavPage.Nav")}{" "}
        </KBTitle>
      </View>
    </TouchableOpacity>
  );
}

export default WazeLink;
