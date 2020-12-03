import * as React from "react";
import { I18nManager } from 'react-native';

import AppNavigationStack from "./Components/navigation/AppNavigationStack";
import LoadAssets from "./Components/LoadAssets";
import { StateProvider } from "./Utils/State";
import { initialState, reducer } from "./Utils/Reducer";
import { NavigationContainer } from "@react-navigation/native";
import { Updates } from "expo";
import KBText from "./Components/KBText";

console.log('*** I18nManager.isRTL', I18nManager.isRTL);
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
if (I18nManager.isRTL){
  Updates.reloadAsync();
}

function App() {
  return (
    <LoadAssets>
      <StateProvider initialState={initialState} reducer={reducer}>
        <NavigationContainer >
          <AppNavigationStack />
        </NavigationContainer>
      </StateProvider>
    </LoadAssets>
  );
}

export default App;
