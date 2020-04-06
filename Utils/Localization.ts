// import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { AboutContent, ProtocolContent } from "../Config/TextContent";

i18n.translations = {
  en: {
    EnterPhone: "Enter PhoneNumber",
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
  },
  he: {
    EnterPhone: "כניסה בזיהוי טלפוני>>  ",
    EnterFB: "כניסה עם פייסבוק",
    Welcome: "ברוכה השבה \n לעולם המתקדם של KB-PURE",
    Logout: "התנתק",
    BeforeAuthTitle: "קוסמטיקאית יקרה,",
    BeforeAuth:
      "ברוכה הבאה \n לעולם המתקדם של KB-PURE. \n רגע לפני שמתחילים, מספר צעדים לשמירה על פרטיותך.",
    DrawerLinks: {
      MainPage: "לעמוד הראשי",
      Top10: "My Top 10",
      Company: {
        Protocol: "נהלי החברה להחזרים",
        About: "על החברה",
        Navigation: "ניווט למשרדי החברה",
        Privacy: "מדיניות פרטיות"
      }
    },
    PersonalPage: {
      Title: "איזור אישי",
      Name: "שם:",
      Dob: "תאריך לידה:",
      Guide: "שם מדריך:",
      Phone: "טלפון:",
      Address: "כתובת:",
      ID: "ח.פ:",
      LastPurchase: "תאריך רכישה אחרונה:",
      CreatedAt: "תאריך הצטרפות למשפחה:",
      AccountsBalance: "מאזן מול הנהלת חשבון:",
      Top10: "My Top 10"
    },
    MainPage: {
      Chat: "ייעוץ מקצועי",
      Shop: "מרכז הזמנות",
      Courses: "סדנאות וימי העשרה",
      HomeCare: "סימולציות להתאמת טיפול ביתי",
      LiveTV: "LIVE TV",
      Simulation: "פרוטוקול טיפולי מכון",
      Articles: "מאמרים",
      Marketing: "חומר שיווקי"
    },
    NavPage: {
      Title: "ניווט למשרדי החברה",
      Address: "דוד סחרוב 5, ראשון לציון",
      Nav: "ניווט"
    },
    AboutPage: {
      Title: "אודות",
      SemiTitle: "לקוח/ה יקר/ה",
      Content: AboutContent,
      FollowUs: "עקבו אחרינו ברשתות החברתיות",
      ContactUs: "ליצירת קשר עם משרדי החברה >>"
    },
    ProtocolPage: {
      Title: "מדיניות החזרות",
      SemiTitle:
        "מדיניות החזרת מוצרים בכפוף לתקנות המעוגנות בחוק להגנת הצרכן התשעא-2010",
      Content: ProtocolContent
    }
  }
};

// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = "he";
i18n.fallbacks = true;

export function translated(t) {
  return i18n.t(t);
}
