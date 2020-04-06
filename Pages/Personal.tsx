import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useStateValue } from "../Utils/State";
import Background from "../Components/Background";
import KBTitle from "../Components/KBTitle";
import { translated } from "../Utils/Localization";
import KBText from "../Components/KBText";
import { RFPercentage } from "react-native-responsive-fontsize";

function Line({ title, value }) {
  return (
    <View style={{
      flexDirection: "row-reverse",
      alignSelf: 'stretch',
      marginTop: 4,
    }}>
      <KBTitle
        style={{
          fontSize: RFPercentage(2.3),
          alignSelf: 'flex-start',
          flex:1,
          textAlign: 'right'
        }}
      >
        {""}{title}{""}
      </KBTitle>
      <KBText
        style={{
          fontSize: RFPercentage(2.3),
          // alignSelf: 'stretch',
          flex:1,
          textAlign: 'right'
        }}
      >
        {" "}{value}{" "}
      </KBText>
    </View>
  );
}

function Personal() {
  const [
    {
      user: { meta }
    }
  ] = useStateValue();

  if (!meta) return null;
  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <KBTitle> {translated("PersonalPage.Title")}</KBTitle>

          <Line title={translated("PersonalPage.Name")} value={meta.name} />
          <Line title={translated("PersonalPage.Dob")} value={meta.dob} />
          <Line title={translated("PersonalPage.Guide")} value={meta.agent} />
          <Line
            title={translated("PersonalPage.Phone")}
            value={meta.phoneNumber}
          />
          <Line title={translated("PersonalPage.Address")} value={meta.address} />
          <Line title={translated("PersonalPage.ID")} value={meta.vat} />
          <Line title={translated("PersonalPage.LastPurchase")} value="TODO" />
          <Line
            title={translated("PersonalPage.CreatedAt")}
            value={meta.created}
          />

          <KBText style={styles.marginTop}>
            {translated("PersonalPage.AccountsBalance")} 0.00
          </KBText>

          <KBTitle style={styles.marginTop}>
            {translated("PersonalPage.Top10")}
          </KBTitle>
        </View>
      </Background>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginRight: 5
  },
  textLine: {
    textAlign: "right"
  },
  marginTop: {
    marginTop: 30
  }
});

export default Personal;
