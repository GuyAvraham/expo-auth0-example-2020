import { AuthSession } from "expo";
import jwtDecode from "jwt-decode";
import { Alert } from "react-native";

import getSettings from "../../config/get-settings";

const { auth0ClientId, auth0Domain } = getSettings();

const toQueryString = params =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

const logout = async () => {
  const response = await AuthSession.dismiss();
};

const login = async () => {
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
    return handleLoginResponse(response.params);
  }
};

const handleLoginResponse = response => {
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

  return name;
};

export default { login, logout };
