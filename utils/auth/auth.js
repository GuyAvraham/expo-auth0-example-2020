import { AuthSession } from "expo";
import jwtDecode from "jwt-decode";
import { Alert } from "react-native";
import getSettings from "../../config/get-settings";

const {
  auth0: { auth0Domain }
} = getSettings();

const toQueryString = params =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

const logout = async () => AuthSession.dismiss();



const login = async (settings, primaryUserId) => {
  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  const redirectUrl = AuthSession.getRedirectUrl();
  console.log(`Redirect URL: ${redirectUrl}`);

  // Structure the auth parameters and URL
  const params = {
    client_id: settings.auth0ClientId,
    redirect_uri: redirectUrl,
    // response_type:
    // id_token will return a JWT token with the profile as described on the scope
    // token will return access_token to use with further api calls
    response_type: "token id_token",
    nonce: "nonce", // ideally, this will be a random value
    rememberLastLogin: true,
    primaryUserId,
    ...settings
  };

  const queryParams = toQueryString(params);
  const authUrl = `https://${auth0Domain}/authorize${queryParams}`;

  console.log(authUrl);

  // Perform the authentication
  const response = await AuthSession.startAsync({ authUrl });
  return handleLoginResponse(response);
};

const handleLoginResponse = response => {
  if (response.error || response.type !== "success") {
    console.log(response);
    return;
  }

  console.log(response);
  const decodedJwtIdToken = jwtDecode(response.params.id_token);
  console.log(decodedJwtIdToken);
  return {
    ...decodedJwtIdToken,
    name: decodedJwtIdToken["https://crm.kb.com/name"],
    primaryUserId: decodedJwtIdToken.sub,
  };
};

export default { login, logout };
