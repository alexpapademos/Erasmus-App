// js/language-more.js

const translations = {
    el: {
      title: "Περισσότερα | Erasmus",
      more_title: "Περισσότερα για το Erasmus",
      what_is: "Τι είναι το Erasmus;",
      what_is_text: "Το Erasmus είναι ένα Ευρωπαϊκό πρόγραμμα που προσφέρει τη δυνατότητα στους φοιτητές να σπουδάσουν ή να εκπαιδευτούν στο εξωτερικό, αποκτώντας πολύτιμες εμπειρίες ζωής και γνώσης.",
      uni_links: "Σύνδεσμοι συνεργαζόμενων Πανεπιστημίων",
      video_title: "Παρακολούθησε την εμπειρία φοιτητών Erasmus",
      student_quote: "Μαρτυρία φοιτητή",
      quote: "«Το Erasmus μου άλλαξε τη ζωή. Γνώρισα άλλες κουλτούρες, έμαθα να λειτουργώ αυτόνομα και έκανα φίλους από όλη την Ευρώπη!»",
      quote_by: "— Μαρία, απόφοιτη Τμήματος Πληροφορικής",
      footer: "© 2025 Erasmus App | Πανεπιστήμιο Πελοποννήσου",
      menu_home: "Αρχική",
      menu_more: "Περισσότερα",
      menu_reqs: "Απαιτήσεις",
      menu_apply: "Αίτηση",
      menu_signup: "Εγγραφή",
      menu_login: "Είσοδος"
    },
    en: {
      title: "More | Erasmus",
      more_title: "More about Erasmus",
      what_is: "What is Erasmus?",
      what_is_text: "Erasmus is a European program that allows students to study or train abroad, gaining valuable life and academic experience.",
      uni_links: "Partner Universities Links",
      video_title: "Watch Erasmus student experiences",
      student_quote: "Student Testimonial",
      quote: "\"Erasmus changed my life. I met new cultures, learned to be independent, and made friends all over Europe!\"",
      quote_by: "— Maria, Computer Science Graduate",
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
  