import React from "react";
import { StyleSheet, View } from "react-native";

import Entrance from "./pages/Entrance";
import Main from "./pages/Main";
import Auth from "./utils/auth/auth";
import getSettings from "./config/get-settings";

const {
  auth0: { passwordlessClient }
} = getSettings();

const initialState = { name: null, primaryUserId: null, passwordless: null  };

export default class App extends React.Component {
  state = {
    name: null
  };

  logout = async () => {
    await Auth.logout();
    this.setState(initialState);
  };

  loginPasswordless = async () => {
    const response = await Auth.login(passwordlessClient);
    console.log(response, "passwordless result***");
    this.setState({
      name: response.name,
      primaryUserId: response.primaryUserId,
      passwordless: response,
    });
  };

  render() {
    const { primaryUserId, name, passwordless } = this.state;
    let render = () => ({});
    if (!primaryUserId) {
      render = () => (
        <Entrance
          onLogin={this.loginPasswordless}
          label="EnterPhone"
        />
      );
    } else {
      render = () => <Main name={name} user={passwordless} logout={this.logout} />;
    }

    return <View style={styles.container}>{render()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40
  }
});
