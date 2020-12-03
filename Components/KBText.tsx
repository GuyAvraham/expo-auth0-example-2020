import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const KBText = props => (
  <Text adjustsFontSizeToFit {...props} style={[styles.baseText, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "heb-open-sans-regular",
    fontSize: RFPercentage(2.7),
    textAlign: "center"
  }
});

export default KBText;
