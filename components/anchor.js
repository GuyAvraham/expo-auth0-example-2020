import React from "react";
import { Text } from "react-native";
import { Linking } from "expo";

import MaterialButtonViolet from "./MaterialButtonViolet";

const Anchor = props => {
  const _handlePress = () => {
    Linking.openURL(props.href);
    props.onPress && props.onPress();
  };

  return (
    <MaterialButtonViolet {...props} text1={props.text} onPress={_handlePress} />
  );
};

export default Anchor;
