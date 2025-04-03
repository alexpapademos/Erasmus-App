// language-index.js

const translations = {
    el: {
      main_title: "Καλώς ήρθες στην Erasmus App",
      menu_home: "Αρχική",
      menu_more: "Περισσότερα",
      menu_reqs: "Απαιτήσεις",
      menu_apply: "Αίτηση",
      menu_signup: "Εγγραφή",
      menu_login: "Είσοδος",
      section_title: "Τι είναι το Erasmus+;",
      section_text: "Η Erasmus App είναι εδώ για να σε βοηθήσει να κάνεις το πρώτο βήμα προς μια αξέχαστη εμπειρία στο εξωτερικό! Μάθε πώς μπορείς να συμμετέχεις, τι απαιτείται και κάνε εύκολα την αίτησή σου.",
      footer_text: "© 2025 Erasmus App | Πανεπιστήμιο Πελοποννήσου"
    },
    en: {
      main_title: "Welcome to the Erasmus App",
      menu_home: "Home",
      menu_more: "More",
      menu_reqs: "Requirements",
      menu_apply: "Application",
      menu_signup: "Sign Up",
      menu_login: "Login",
      section_title: "What is Erasmus+?",
      section_text: "The Erasmus App is here to help you take the first step towards an unforgettable experience abroad! Learn how to participate, what's required, and apply easily.",
      footer_text: "© 2025 Erasmus App | University of the Peloponnese"
    }
  };
  
  function switchLanguage(lang) {
    localStorage.setItem("preferredLang", lang); // Αποθηκεύουμε τη γλώσσα
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
    const savedLang = localStorage.getItem("preferredLang") || "el"; // default ελληνικά
    switchLanguage(savedLang); // εφαρμογή της αποθηκευμένης γλώσσας
  
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        switchLanguage(lang);
      });
    });
  });
  