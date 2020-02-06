import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.translations = {
  en: {
    Enter: "Enter",
    Welcome: "Welcome back",
    Chat: "Chat",
    Shop: "Shop",
    Logout: "Logout",
    Content: "Content"
  },
  he: {
    Enter: "כניסה",
    Welcome: "היי ",
    Chat: "ייעוץ מקצועי",
    Shop: "הזמנת מוצרים",
    Logout: "התנתק",
    Content: "תוכן"
  }
};
// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = "he";
i18n.fallbacks = true;

export function translated(t) {
  return i18n.t(t);
}
