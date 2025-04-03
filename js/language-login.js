// js/language-login.js

const translations = {
    el: {
      title: "Είσοδος | Erasmus",
      login_title: "Είσοδος Χρήστη",
      login_subtitle: "Σύνδεση στον λογαριασμό σου",
      login_details: "Στοιχεία Σύνδεσης",
      email: "Email:",
      password: "Κωδικός:",
      remember: "Να με θυμάσαι",
      login_btn: "🔐 Είσοδος",
      footer: "© 2025 Erasmus App | Πανεπιστήμιο Πελοποννήσου",
      menu_home: "Αρχική",
      menu_more: "Περισσότερα",
      menu_reqs: "Απαιτήσεις",
      menu_apply: "Αίτηση",
      menu_signup: "Εγγραφή",
      menu_login: "Είσοδος"
    },
    en: {
      title: "Login | Erasmus",
      login_title: "User Login",
      login_subtitle: "Log in to your account",
      login_details: "Login Details",
      email: "Email:",
      password: "Password:",
      remember: "Remember me",
      login_btn: "🔐 Login",
      footer: "© 2025 Erasmus App | University of the Peloponnese",
      menu_home: "Home",
      menu_more: "More",
      menu_reqs: "Requirements",
      menu_apply: "Application",
      menu_signup: "Sign Up",
      menu_login: "Login"
    }
  };
 
  function switchLanguage(lang) {
    localStorage.setItem("preferredLang", lang);
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[lang][key]) {
        if (el.tagName === "TITLE") {
          document.title = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferredLang") || "el";
    switchLanguage(savedLang);
  
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        switchLanguage(lang);
      });
    });
  });