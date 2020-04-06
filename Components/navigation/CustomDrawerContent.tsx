import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { translated } from "../../Utils/Localization";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label={translated("Company.Main")} onPress={()=>{}} />
    </DrawerContentScrollView>
  );
}



export default CustomDrawerContent;
