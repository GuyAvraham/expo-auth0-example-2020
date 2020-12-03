import * as React from "react";
import { Linking } from "expo";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

import KBTitle from "../../Components/KBTitle";
import { translated } from "../../Utils/Localization";
import KBText from "../../Components/KBText";

function About() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <KBTitle style={styles.title}>{translated("AboutPage.Title")}</KBTitle>
        <KBTitle style={styles.title}>
          {translated("AboutPage.SemiTitle")}
        </KBTitle>
        <KBText style={styles.content}>
          {translated("AboutPage.Content")}
        </KBText>
        <KBTitle style={styles.followUs}>
          {translated("AboutPage.FollowUs")}
        </KBTitle>
        <View style={styles.socialContainer}>
          <Ionicons
            name="logo-facebook"
            size={RFPercentage(7)}
            // onPress={() =>
            // }
          />
          <KBText style={styles.delimiter}>|</KBText>
          <Ionicons
            name="logo-instagram"
            size={RFPercentage(7)}
            // onPress={() =>
            // }
          />
        </View>
        <TouchableOpacity
          style={styles.contactUs}
          onPress={() => Linking.openURL("tel:036742323")}
        >
          <KBText style={styles.contactUsText}>
            {translated("AboutPage.ContactUs")}
          </KBText>
        </TouchableOpacity>
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
  content: {
    marginTop: 10,
    fontSize: RFPercentage(2.3),
    textAlign: "right"
  },
  followUs: {
    fontSize: RFPercentage(2.5),
    marginTop: 20,
    alignSelf: "center"
  },
  socialContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10
  },
  delimiter: {
    fontSize: RFPercentage(5),
    color: "#CCC6C6",
    marginLeft: 60,
    marginRight: 60
  },
  contactUs: {
    alignSelf: "stretch",
    backgroundColor: "#2B2E34",
    borderRadius: 30,
    marginVertical: 30
    // marginTop: 30
  },
  contactUsText: {
    // flex: 1,
    margin: 20,
    color: "#FFFFFF"
  }
});

export default About;
