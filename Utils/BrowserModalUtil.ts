import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

export const OpenBrowserModal = async href => {
  const result = await WebBrowser.openAuthSessionAsync(
    href,
    Constants.linkingUrl,
    { showInRecents: true }
  );
};
