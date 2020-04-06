import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const BlueFlagImg = require("../assets/navPage/flag-pink.png");
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const region = {
  latitude: 31.99246,
  longitude: 34.76881,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01 * ASPECT_RATIO
};

function CustomMap() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={region}
      style={{
        ...StyleSheet.absoluteFillObject
      }}
    >
      <Marker
        coordinate={region}
        title="KB-PURE"
        description="KB-PURE"
      >
        <Image
          source={BlueFlagImg}
          resizeMode="contain"
          style={{width: 100, height: 100}}
        />
      </Marker>
    </MapView>
  );
}

export default CustomMap;
