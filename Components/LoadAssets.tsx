import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

function cacheAssetsAsync({ images = [], fonts = [] }) {
  return Promise.all([...cacheImages(images), ...cacheFonts(fonts)]);
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

function LoadAssets(props) {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function _cache() {
      try {
        await cacheAssetsAsync({
          images: [
            require("../assets/images/logo-large.png"),
            require("../assets/images/user.png"),
            require("../assets/back-blur-3.mp4"),
            require("../assets/kb-icon.png"),
            require("../assets/hamburger.png"),
            require("../assets/navPage/flag-blue.png"),
            require("../assets/navPage/flag-pink.png"),
            require("../assets/navPage/waze.png"),
          ],
          fonts: [
            FontAwesome.font,
            Ionicons.font,
            {
              "open-sans-bold": require("../assets/Fonts/OpenSans/English/OpenSans-Bold.ttf"),
              "open-sans-regular": require("../assets/Fonts/OpenSans/English/OpenSans-Regular.ttf"),
              "open-sans-light": require("../assets/Fonts/OpenSans/English/OpenSans-Light.ttf"),

              "heb-open-sans-bold": require("../assets/Fonts/OpenSans/Hebrew/OpenSansHebrew-Bold.ttf"),
              "heb-open-sans-regular": require("../assets/Fonts/OpenSans/Hebrew/OpenSansHebrew-Regular.ttf"),
              "heb-open-sans-light": require("../assets/Fonts/OpenSans/Hebrew/OpenSansHebrew-Light.ttf"),

              "heb-condense-open-sans-bold": require("../assets/Fonts/OpenSans/HebrewCondensed/OpenSansHebrewCondensed-Bold.ttf"),
              "heb-condense-open-sans-regular": require("../assets/Fonts/OpenSans/HebrewCondensed/OpenSansHebrewCondensed-Regular.ttf"),
              "heb-condense-open-sans-light": require("../assets/Fonts/OpenSans/HebrewCondensed/OpenSansHebrewCondensed-Light.ttf"),
            }
          ]
        });
      } catch (e) {
        console.warn(
          "There was an error caching assets (see: main.js), perhaps due to a " +
            "network timeout, so we skipped caching. Reload the app to try again."
        );
        console.log(e.message);
      } finally {
        setReady(true);
      }
    }

    _cache()
    return () => {};
  }, []);

  return isReady ? props.children : <AppLoading/>;
}

export default LoadAssets;
