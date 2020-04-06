import React from "react";
import { useWindowDimensions, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Personal from "../../Pages/Personal";
import Index from "../../Pages/Main/";
import { useStateValue } from "../../Utils/State";
import { translated } from "../../Utils/Localization";
import NavInstructions from "../../Pages/Company/NavigationInstructions";
import Logout from "../Logout";
import About from "../../Pages/Company/AboutCompany";
import CompanyProtocol from "../../Pages/Company/CompanyProtocol";
import Top10 from "../Top10";
import Privacy from "../../Pages/Company/Privacy";

const MainDrawer = createDrawerNavigator();

function MainNavDrawer(props) {
  const [{ user }] = useStateValue();

  if (!user.meta) props.navigation.navigate('Enter')

  const dimensions = useWindowDimensions();
  return (
    <MainDrawer.Navigator
      initialRouteName="Main"
      drawerPosition="right"
      // drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        style: {
          marginTop: 0 // The content of the drawer is lower
        },
        contentContainerStyle: {
          alignItems: "center"
          // layoutDirection: 'RTL',
          // justifyContent: "center",
          // alignSelf: "center"
        },
        itemStyle: {},
        labelStyle: {
          color: "#fff",
          fontFamily: "heb-open-sans-bold",
          fontSize: RFPercentage(2.2)
        }
      }}
      drawerStyle={{
        backgroundColor: "#1AA1E5",
        width: 0.6 * dimensions.width
      }}
    >
      <MainDrawer.Screen
        name="Personal"
        component={Personal}
        options={{
          drawerLabel: user.firstName,
          drawerIcon: props => (
            <Image
              source={require("../../assets/images/user.png")}
              resizeMode="contain"
              style={{ tintColor: "#fff", width: 30, height: 30 }}
            />
          )
        }}
      />
      <MainDrawer.Screen
        name="Main"
        component={Index}
        options={{ drawerLabel: translated("DrawerLinks.MainPage") }}
      />
      <MainDrawer.Screen
        name="Top10"
        component={Top10}
        options={{ drawerLabel: translated("DrawerLinks.Top10") }}
      />
      <MainDrawer.Screen
        name="Protocol"
        component={CompanyProtocol}
        options={{ drawerLabel: translated("DrawerLinks.Company.Protocol") }}
      />
      <MainDrawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: translated("DrawerLinks.Company.About") }}
      />
      <MainDrawer.Screen
        name="Navigation"
        component={NavInstructions}
        options={{ drawerLabel: translated("DrawerLinks.Company.Navigation") }}
      />
      <MainDrawer.Screen
        name="Privacy"
        component={Privacy}
        options={{ drawerLabel: translated("DrawerLinks.Company.Privacy") }}
      />
      <MainDrawer.Screen
        name="Logout"
        component={Logout}
      />
    </MainDrawer.Navigator>
  );
}

export default MainNavDrawer;
