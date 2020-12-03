import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

import KBText from "../../Components/KBText";
import {translated} from "../../Utils/Localization";

const deviceWidth = Dimensions.get("window").width;

export const Line = props => {
  return <View style={styles.line}>{props.children}</View>;
};

export const MainPageButton = props => (
  <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
    <Image resizeMode="contain" source={props.image} style={styles.image} />
    <KBText style={styles.label}>
      {" "}
      {translated(`MainPage.${props.label}`)}{" "}
    </KBText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  line: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 10
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    alignItems: "center",
    // height: undefined,
    // width: undefined,
    // backgroundColor: "#F2F2F2",
  },
  image: {
    flex: 1,
    // alignSelf: 'stretch',
    // overflow: 'visible',
    width: deviceWidth / 2.3,
    height: undefined,
    aspectRatio: 1
  },
  label: {
    // flex:0.1,
    alignSelf: "stretch",
    // backgroundColor: "#F2F2F2",
    // fontSize: RFPercentage(2),
    padding: 3
  }
});