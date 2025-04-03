// language-application.js

const translations = {
  el: {
    form_title: "Φόρμα Αίτησης Erasmus+",
    nav_home: "Αρχική",
    nav_more: "Περισσότερα",
    nav_requirements: "Απαιτήσεις",
    nav_application: "Αίτηση",
    nav_signup: "Εγγραφή",
    nav_login: "Είσοδος",
    form_heading: "Συμπλήρωσε την αίτησή σου",
    personal_info: "Προσωπικά Στοιχεία",
    fname_label: "Όνομα:",
    lname_label: "Επίθετο:",
    id_label: "Αριθμός Μητρώου:",
    academic_info: "Ακαδημαϊκά Στοιχεία",
    passed_label: "Ποσοστό περασμένων μαθημάτων (%):",
    gpa_label: "Μέσος όρος:",
    english_level: "Επίπεδο Αγγλικών:",
    extra_lang: "Γνώση επιπλέον ξένων γλωσσών:",
    yes: "ΝΑΙ",
    no: "ΟΧΙ",
    university: "Πανεπιστήμια",
    choice1: "1η Επιλογή:",
    choice2: "2η Επιλογή:",
    choice3: "3η Επιλογή:",
    files: "Αρχεία",
    file_transcript: "Αναλυτική βαθμολογία (PDF):",
    file_english: "Πτυχίο αγγλικής γλώσσας:",
    file_other: "Πτυχία άλλων ξένων γλωσσών:",
    agree: "Αποδέχομαι τους όρους της αίτησης",
    submit: "📨 Υποβολή",
    footer: "&copy; 2025 Erasmus App | Πανεπιστήμιο Πελοποννήσου"
  },
  en: {
    form_title: "Erasmus+ Application Form",
    nav_home: "Home",
    nav_more: "More",
    nav_requirements: "Requirements",
    nav_application: "Application",
    nav_signup: "Sign Up",
    nav_login: "Login",
    form_heading: "Fill in your application",
    personal_info: "Personal Information",
    fname_label: "First Name:",
    lname_label: "Last Name:",
    id_label: "Student ID:",
    academic_info: "Academic Information",
    passed_label: "Passed courses (%):",
    gpa_label: "Grade Point Average:",
    english_level: "English Proficiency:",
    extra_lang: "Knowledge of other languages:",
    yes: "YES",
    no: "NO",
    university: "Universities",
    choice1: "1st Choice:",
    choice2: "2nd Choice:",
    choice3: "3rd Choice:",
    files: "Files",
    file_transcript: "Transcript of records (PDF):",
    file_english: "English certificate:",
    file_other: "Other language certificates:",
    agree: "I accept the terms of the application",
    submit: "📨 Submit",
    footer: "&copy; 2025 Erasmus App | University of the Peloponnese"
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
