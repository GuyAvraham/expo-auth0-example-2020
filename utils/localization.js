import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.translations = {
  en: {
    EnterPhone: "Enter PhoneNumber",
    EnterFB: "Enter Facebook",
    Welcome: "Welcome back",
    Chat: "Chat",
    Shop: "Shop",
    Logout: "Logout",
    Content: "Content",
    HideModal: "Hide",
  },
  he: {
    EnterPhone: "כניסה בזיהוי טלפוני",
    EnterFB: "כניסה עם פייסבוק",
    Welcome: "היי ",
    Chat: "ייעוץ מקצועי",
    Shop: "הזמנת מוצרים",
    Logout: "התנתק",
    Content: "תוכן",
    HideModal: "סגור חלון"
  }
};
// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = "he";
i18n.fallbacks = true;

export function translated(t) {
  return i18n.t(t);
}
