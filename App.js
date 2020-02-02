import React from "react";
import { StyleSheet, View} from "react-native";

import Entrance from "./pages/Entrance";
import Main from "./pages/Main";
import createAuth0Client from "@auth0/auth0-spa-js";
import Auth from "./utils/auth/auth";

export default class App extends React.Component {
  state = {
    name: null
  };

  logout = async () => {
    await Auth.logout();
    this.setState({ name: null });
  };

  login = async () => {
    const name = await Auth.login();
    console.log(name, 'name ***')
    this.setState({name});
  };


  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        {name ? (
          <Main name={name} logout={this.logout} />
        ) : (
          <Entrance onLogin={this.login} name={name} />
        )}
      </View>
    );
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
