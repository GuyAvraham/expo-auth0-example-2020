import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Personal(props) {
  const user = props.user["https://crm.kb.com/"];
  return (
    <View>
      <Text>{user.name}</Text>
      <Text> כתובת {user.address}  </Text>
      <Text> שם הסוכן: {user.agent}  </Text>
      <Text>  תאריך לידה {user.dob}</Text>
      <Text> תאריך תחילת עבודה   {user.created}</Text>
      <Text>{user.phoneNumber}</Text>
      <Text> מספר עוסק {user.vat}</Text>
    </View>
  )
}

export default Personal;