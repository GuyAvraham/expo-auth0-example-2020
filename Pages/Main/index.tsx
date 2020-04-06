import React, { useEffect } from "react";
import {
  ScrollView,
  Alert
} from "react-native";
import { Linking } from "expo";
import { useStateValue } from "../../Utils/State";
import Background from "../../Components/Background";
import { Line, MainPageButton } from "./MainAction";

function Index(props) {
  const [{ user }, dispatch] = useStateValue();

  // todo: currently this hack has to be before the focus effect.
  useEffect(() => {
    dispatch({
      type: "setDrawerNav",
      drawerNav: props.navigation
    });
  }, []);

  const chatDeepLink = `http://m.me/104737824361966?ref=${user.primaryUserId}`;
  const wordPressUrl = "http://wp.romach-dev.com/wp-login.php";

  return (
    <Background>
      <ScrollView>
        <Line>
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/Chat.png")}
            label="Chat"
            onPress={async () => {
              Alert.alert("פתיחת ייעוץ מקצועי", chatDeepLink, [
                { text: "OK", onPress: () => Linking.openURL(chatDeepLink) }
              ]);
            }}
          />
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/Order.png")}
            label="Shop"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
        </Line>

        <Line>
          <MainPageButton
            // image={require("../assets/mainPageImages/Shop2.png")}
            image={require("../../assets/mainPageImages/liran/Courses.png")}
            label="Courses"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/HomeCare.png")}
            label="HomeCare"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
        </Line>

        <Line>
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/LiveTV.png")}
            label="LiveTV"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/Simulation.png")}
            label="Simulation"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
        </Line>

        <Line>
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/Articles.png")}
            label="Articles"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
          <MainPageButton
            image={require("../../assets/mainPageImages/liran/Marketing.png")}
            label="Marketing"
            // onPress={() => OpenBrowserModal(wordPressUrl)}
          />
        </Line>
      </ScrollView>
    </Background>
  );
}

export default Index;
