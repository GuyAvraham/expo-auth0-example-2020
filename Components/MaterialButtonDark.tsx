import React from "react";
import { StyleSheet} from "react-native";
import ButtonSpinner from 'react-native-button-spinner';
import KBTitle from "./KBTitle";

function MaterialButtonDark(props) {
  return (
    <ButtonSpinner disabled={false} style={{...styles.container, ...props.style}} onPress={props.onPress}>
      <KBTitle style={styles.caption}>{props.text1}</KBTitle>
    </ButtonSpinner>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    maxHeight: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 20,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 50,
  },
  caption: {
    color: "#fff",
  }
});

export default MaterialButtonDark;
