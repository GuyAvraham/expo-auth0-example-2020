import * as React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Entrance from "../../Pages/Entrance";
import Logo from "../Logo";
import ProfileButton from "./ProfileButton";
import MainNavDrawer from "./MainNavDrawer";
import DrawerIcon from "./DrawerIcon";
import { useStateValue } from "../../Utils/State";

const Stack = createStackNavigator();
const deviceHeight = Dimensions.get("window").height;

function AppNavigationStack() {
  const [{ drawerNav }] = useStateValue();

  return (
    <Stack.Navigator
      // mode="card"
      mode="modal" // sets headerMode=screeb
      // headerMode="float"
      screenOptions={{
        headerTitle: props => (
          <Logo
            {...props}
            style={{}}
            onPress={() => drawerNav.navigate("Main")}
          />
        ),
        headerTitleAlign: "center",
        headerStyle: {
          height: deviceHeight / 7
        },
        headerTransparent: false,
        headerLeft: props => (
          <ProfileButton
            {...props}
            onPress={() => drawerNav.navigate("Personal")}
          />
        ),
        headerLeftContainerStyle: {
          marginLeft: 20
          // marginTop: -20,
          // justifyContent: 'center',
          // alignSelf: 'center',
        },
        headerRight: props => (
          <DrawerIcon onPress={() => drawerNav.toggleDrawer()} {...props} />
        ),
        headerRightContainerStyle: {
          marginRight: 10,
          marginTop: -5
        }
      }}
    >
      <Stack.Screen
        name="Enter"
        component={Entrance}
        options={{
          headerShown: false,
          headerTransparent: true
        }}
      />
      {/*<Stack.Screen name="Personal" component={Personal} />*/}
      <Stack.Screen name="MainNavDrawer" component={MainNavDrawer} />
    </Stack.Navigator>
  );
}

export default AppNavigationStack;
