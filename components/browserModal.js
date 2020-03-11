import React from "react";
import { Text } from "react-native";
import * as WebBrowser from 'expo-web-browser';


import MaterialButtonViolet from "./MaterialButtonViolet";

const BrowserModal = props => {
  const _handlePress = async () => {
    const result = await WebBrowser.openAuthSessionAsync(props.href);
    console.log('BrowserModal result ', result);
    props.onPress && props.onPress();
  };

  return (
    <MaterialButtonViolet {...props} text1={props.text} onPress={_handlePress} />
  );
};

export default BrowserModal;
