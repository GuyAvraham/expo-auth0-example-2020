import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { AuthSession } from "expo";
import Constants from "expo-constants";
import jwtDecode from "jwt-decode";

import Entrance from "./pages/Entrance";
import Main from "./pages/Main";
import createAuth0Client from "@auth0/auth0-spa-js";

const { auth0ClientId, auth0Domain } = Constants.manifest.extra;
const nosercertstest = 'ef278182t7439h24ib4';

/**
 * Converts an object to a query string.
 */
function toQueryString(params) {
  return (
    "?" +
    Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&")
  );
}

export default class App extends React.Component {
  state = {
    name: null
  };

  logout = async () => {
    const response = await AuthSession.dismiss();
    console.log("logout", response);
    this.setState({ name: null });
  };

  login = async () => {
    // Retrieve the redirect URL, add this to the callback URL list
    // of your Auth0 application.
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log(`Redirect URL: ${redirectUrl}`);

    // Structure the auth parameters and URL
    const queryParams = toQueryString({
      client_id: auth0ClientId,
      redirect_uri: redirectUrl,
      response_type: "id_token", // id_token will return a JWT token
      scope: "openid profile user_metadata", // retrieve the user's profile
      nonce: "nonce" // ideally, this will be a random value
    });

    const authUrl = `${auth0Domain}/authorize` + queryParams;

    // Perform the authentication
    const response = await AuthSession.startAsync({ authUrl });
    console.log("Authentication response ** ", response);

    if (response.type === "success") {
      this.handleResponse(response.params);
    }
  };

  handleResponse = response => {
    if (response.error) {
      Alert(
        "Authentication error",
        response.error_description || "something went wrong"
      );
      return;
    }

    // Retrieve the JWT token and decode it
    console.log(response, "response");
    console.log(response.user_metadata, "metadata");
    // console.log(jwtDecode(response.user_metadata), 'decoded **')

    const jwtToken = response.id_token;
    const decoded = jwtDecode(jwtToken);

    console.log(decoded, "decoded id_token ***");
    const { name } = decoded;
    this.setState({ name });
  };

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        {name ? (
          <Main name={name} logout={this.logout} />
        ) : (
          <Entrance onLogin={this.login} />
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
