import React from "react";
import { View, StyleSheet } from "react-native";
import KBTitle from "../../Components/KBTitle";
import { translated } from "../../Utils/Localization";
import CustomMap from "../../Components/CustomMap";
import WazeLink from "../../Components/WazeLink";

function NavInstructions(props) {
  return (
    <View style={styles.container}>
      {/*<View style={{ flex: 0.2 }}/>*/}
      <KBTitle style={styles.title}>{translated("NavPage.Title")}</KBTitle>
      <View style={styles.mapView}>
        <CustomMap />
      </View>
      {/*<View style={{ flex: 0.6 }}/>*/}
      <KBTitle style={styles.address}>{translated("NavPage.Address")}</KBTitle>
      <WazeLink style={styles.waze}/>
      <View style={{ flex: 1 }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start" },
  title: {
    textAlign: "center",
    flex: 0.6,
    alignSelf: "flex-end",
    marginTop:20,
    marginLeft: 20,
    marginRight: 20,
  },
  mapView: {
    justifyContent: "flex-start",
    flex: 3
  },
  address: { flex: 1, marginTop:20 },
  waze: { flex: 0.7, marginLeft:50, marginRight: 50, }
});

export default NavInstructions;
