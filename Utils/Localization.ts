// import * as Localization from "expo-localization";
import i18n from "i18n-js";

// todo: use i18n-ts instead

i18n.translations = {
  en: {
    EnterPhone: "Universal web login",
    EnterFB: "Enter Facebook",
    Welcome: "Welcome back",
    Logout: "Logout",
    BeforeAuthTitle: "BeforeAuthTitle",
    BeforeAuth: "BeforeAuth",
    DrawerLinks: {
      MainPage: "Main",
      Top10: "My Top 10",
      Company: {
        Protocol: "Protocol",
        About: "About",
        Navigation: "Navigation",
        Privacy: "privacy"
      }
    },
    PersonalPage: {
      Title: "Title",
      Name: "Name",
      Dob: "dob",
      Guide: "Guide",
      Phone: "Phone",
      Address: "Address",
      ID: "ID",
      LastPurchase: "LastPurchase",
      CreatedAt: "CreatedAt",
      AccountsBalance: "AccountsBalance",
      Top10: "My Top 10"
    },
    MainPage: {
      Chat: "Chat",
      Shop: "Shop",
      Courses: "Courses",
      HomeCare: "HomeCare",
      LiveTV: "LiveTV",
      Simulation: "Simulation",
      Articles: "Articles",
      Marketing: "Marketing"
    },
    NavPage: { Title: "title", Address: "address", Nav: "nav" },
    AboutPage: {
      Title: "Title",
      SemiTitle: "SemiTitle",
      Content: "content",
      FollowUs: "FollowUs",
      ContactUs: "ContactUS"
    },
    ProtocolPage: {
      Title: "Title",
      SemiTitle: "SemiTitle",
      Content: "content"
    }
  }
};

// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.fallbacks = true;

export function translated(t) {
  return i18n.t(t);
}
