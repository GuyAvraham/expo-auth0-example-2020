import PropTypes from "prop-types";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import KBText from "../KBText";
import { useStateValue } from "../../Utils/State";

const ProfileButton = props => {
  const [{ user }] = useStateValue();
  if (!user) return null;

  return (
    <TouchableOpacity onPress={props.onPress} style={{...props.style, alignItems: 'center'}}>
      <Image
        source={require("../../assets/images/user.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <KBText style={styles.name}> {user.firstName} </KBText>
    </TouchableOpacity>
  );
};

ProfileButton.propTypes = {
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center'
  },
  name: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontSize: RFPercentage(2.5),
  }
});

export default ProfileButton;
