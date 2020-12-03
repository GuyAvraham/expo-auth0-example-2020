import * as React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import KBText from "./KBText";

const KBTitle = props => (
  <KBText {...props} style={[styles.baseTitle, props.style]}>
    {props.children}
  </KBText>
);

const styles = StyleSheet.create({
  baseTitle: {
    fontFamily: "heb-open-sans-bold",
    fontSize: RFPercentage(3),
    textAlign: "center"
  }
});

export default KBTitle;
