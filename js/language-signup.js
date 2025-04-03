// js/language-signup.js

const translations = {
  el: {
    title: "Εγγραφή | Erasmus",
    signup_title: "Εγγραφή Χρήστη",
    signup_subtitle: "Δημιούργησε νέο λογαριασμό",
    signup_details: "Στοιχεία Χρήστη",
    fname: "Όνομα:",
    lname: "Επώνυμο:",
    email: "Email:",
    password: "Κωδικός:",
    confirm: "Επιβεβαίωση Κωδικού:",
    terms: "Συμφωνώ με τους όρους χρήσης",
    signup_btn: "📝 Εγγραφή",
    footer: "© 2025 Erasmus App | Πανεπιστήμιο Πελοποννήσου",
    menu_home: "Αρχική",
    menu_more: "Περισσότερα",
    menu_reqs: "Απαιτήσεις",
    menu_apply: "Αίτηση",
    menu_signup: "Εγγραφή",
    menu_login: "Είσοδος"
  },
  en: {
    title: "Sign Up | Erasmus",
    signup_title: "User Registration",
    signup_subtitle: "Create a new account",
    signup_details: "User Details",
    fname: "First Name:",
    lname: "Last Name:",
    email: "Email:",
    password: "Password:",
    confirm: "Confirm Password:",
    terms: "I agree to the terms of use",
    signup_btn: "📝 Sign Up",
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