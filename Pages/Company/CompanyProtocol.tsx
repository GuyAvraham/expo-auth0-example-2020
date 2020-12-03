import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import KBTitle from "../../Components/KBTitle";
import { translated } from "../../Utils/Localization";
import KBText from "../../Components/KBText";

function CompanyProtocol(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <KBTitle style={styles.title}>{translated("ProtocolPage.Title")}</KBTitle>
        <KBTitle style={styles.semiTitle}>
          {translated("ProtocolPage.SemiTitle")}
        </KBTitle>
        <KBText style={styles.content}>
          {translated("ProtocolPage.Content")}
        </KBText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    margin: 30
  },
  title: {
    fontSize: RFPercentage(2.5)
  },
  semiTitle: {
    marginTop: 10,
    fontSize: RFPercentage(2)
  },
  content: {
    marginTop: 10,
    fontSize: RFPercentage(1.6),
    textAlign: "right"
  },
});

export default CompanyProtocol;
