// js/language-reqs.js

const translations = {
    el: {
      title: "Απαιτήσεις | Erasmus",
      reqs_title: "Ελάχιστες Απαιτήσεις Συμμετοχής",
      quick_check: "Φόρμα Γρήγορου Ελέγχου",
      study_year: "Έτος Σπουδών:",
      year1: "1ο",
      year2: "2ο",
      year3: "3ο",
      year4: "4ο+",
      passed_percent: "Ποσοστό περασμένων μαθημάτων (%):",
      gpa: "Μέσος όρος:",
      english_level: "Επίπεδο Αγγλικών:",
      check_btn: "Έλεγχος",
      footer: "© 2025 Erasmus App | Πανεπιστήμιο Πελοποννήσου",
      menu_home: "Αρχική",
      menu_more: "Περισσότερα",
      menu_reqs: "Απαιτήσεις",
      menu_apply: "Αίτηση",
      menu_signup: "Εγγραφή",
      menu_login: "Είσοδος"
    },
    en: {
      title: "Requirements | Erasmus",
      reqs_title: "Minimum Participation Requirements",
      quick_check: "Quick Eligibility Check",
      study_year: "Year of Study:",
      year1: "1st",
      year2: "2nd",
      year3: "3rd",
      year4: "4th+",
      passed_percent: "Passed courses (%):",
      gpa: "GPA:",
      english_level: "English Level:",
      check_btn: "Check",
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