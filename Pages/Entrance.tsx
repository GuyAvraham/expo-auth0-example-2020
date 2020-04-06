import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  AppState,
  Dimensions
} from "react-native";

import MaterialButtonDark from "../Components/MaterialButtonDark";
import { translated } from "../Utils/Localization";
import Auth from "../Utils/Auth";
import getSettings from "../Config/GetSettings";
import { useStateValue } from "../Utils/State";
import Background from "../Components/Background";
import KBText from "../Components/KBText";
import KBTitle from "../Components/KBTitle";

const {
  auth0: { passwordlessClient }
} = getSettings();

function Entrance(props) {
  const [{ user }, dispatch] = useStateValue();
  const [showFirstTimeLabel, setShowFirstTimeLabel] = useState(true);
  if (user && user.primaryUserId) props.navigation.navigate("MainNavDrawer");

  const onLogin = async () => {
    const response = await Auth.login(passwordlessClient);
    if (response && response.primaryUserId) {
      dispatch({
        type: "setUser",
        newUser: response
      });
    }
  };

  return (
    <Background>
      <View style={{ flex: 1 }} />
      <View style={styles.container}>
        <Text style={{ display: "none" }}>{AppState.currentState}</Text>
        <Image
          source={require("../assets/images/logo-large.png")}
          resizeMode="contain"
          style={styles.image}
        />
        {showFirstTimeLabel && (
          <View style={styles.welcome}>
            <KBTitle>{translated("BeforeAuthTitle")}</KBTitle>
            <KBText ellipsizeMode="middle" numberOfLines={4}>
              {translated("BeforeAuth")}
            </KBText>
          </View>
        )}
        <MaterialButtonDark
          text1={translated(showFirstTimeLabel ? "EnterPhone" : "Welcome")}
          style={styles.materialButtonDark}
          onPress={onLogin}
        />
      </View>
      <View style={{ flex: 2 }} />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center"
  },
  image: {
    flex: 2,
    width: Dimensions.get("window").width - 150,
    marginLeft: 60,
    marginRight: 60
  },
  welcome: {
    flex: 2,
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60
  },
  materialButtonDark: {
    flex: 1,
    marginTop: 40
  }
});

export default Entrance;
