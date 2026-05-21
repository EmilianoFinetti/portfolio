const translations = {
    it: {
        "subtitle": 'Ingegnere Informatico in divenire presso il <strong class="text-dark fw-semibold">Politecnico di Milano</strong>. Sviluppatore back-end con esperienza in Python, Django e C++. Appassionato di sistemi complessi e innovazione tecnologica.',
        "download_cv": "Scarica CV",
        "about_title": "Chi Sono",
        "about_text": "Sono un Ingegnere Informatico appassionato, attualmente studente del corso di Laurea Magistrale in Computer Science and Engineering presso il Politecnico di Milano, dopo aver conseguito la Laurea Triennale presso l'Università di Trento. Con solide basi nello sviluppo backend, mi dedico alla realizzazione di architetture robuste, all'ottimizzazione di database e all'integrazione hardware-software. Nelle mie esperienze professionali, in particolare presso Gong TECNOLOGY S.R.L., ho sviluppato complessi sistemi gestionali utilizzando Python e Django. Sono una persona curiosa, propensa all'apprendimento continuo di nuove tecnologie e flessibile ai cambiamenti. Come membro di un team, apprezzo i punti di vista altrui e utilizzo l'analisi dei dati per prendere decisioni informate ed efficaci.",
        "skills_title": "Competenze",
        "skills_backend": "Back-end & Linguaggi",
        "skills_frontend": "Front-end & Tecnologie",
        "skills_soft": "Competenze Trasversali",
        "skill_problem": "Problem Solving",
        "skill_team": "Lavoro di Squadra",
        "skill_flex": "Flessibilità",
        "skill_data": "Data Analysis",
        "experience_title": "Esperienze Professionali",
        "projects_title": "Progetti",
        "gong_role": "Sviluppatore Back-end | Set 2022 - Ago 2025",
        "gong_desc": "Sviluppo di un sistema gestionale per la somministrazione di mangime liquido negli allevamenti (Django/Python). Progettazione DB MySQL, unit test, CI/CD con GitHub Actions e redazione della documentazione tecnica.",
        "pmf_role": "IT & Data Analysis | Nov 2025 - In corso",
        "pmf_desc": "Sviluppo dell'infrastruttura IT e analisi avanzata dei dati di telemetria per prototipi motociclistici. Elaborazione e visualizzazione dei dati per supportare le scelte ingegneristiche e ottimizzare le performance in pista.",
        "qt_role": "Sviluppatore",
        "qt_desc": "Menzionato nel blog del gruppo Qt per la \"Edge AI Coffee Machine\", mostrando un sistema di riconoscimento facciale e vocale su MCU.",
        "scanner_role": "Developer",
        "scanner_desc": "Software cross-platform (C++/Qt) per il monitoraggio e l'analisi di pressioni superficiali in tempo reale. Gestione di flussi dati ad alta frequenza e visualizzazione grafica avanzata.",
        "kiwi_role": "Sviluppatore Web | Giu 2018 - Ago 2018",
        "kiwi_desc": "Esperienza di tirocinio nello sviluppo front-end e back-end di siti web. Partecipazione attiva allo sviluppo di un gestionale online.",
        "edu_title": "Formazione",
        "edu_polimi_degree": "Laurea Magistrale in Computer Science and Engineering",
        "edu_polimi_date": "2024 - In corso",
        "edu_unitn_degree": "Laurea Triennale in Ingegneria Informatica, Elettronica e delle Comunicazioni",
        "edu_fermi_name": "Istituto Superiore Enrico Fermi, Mantova",
        "edu_fermi_degree": "Diploma di Liceo Scientifico - Scienze Applicate",
        "footer_text": "Creato con passione",
        "cookie_banner_text": "Questo sito utilizza solo cookie tecnici per garantire una migliore esperienza di navigazione.",
        "cookie_banner_btn": "Ho capito",
        "cookie_banner_link": "Cookie Policy",
        "cookie_policy_title": "Cookie Policy",
        "cookie_policy_intro": "Questo sito web utilizza esclusivamente cookie tecnici necessari per il corretto funzionamento. Non vengono utilizzati cookie di profilazione o di terze parti per tracciare il comportamento degli utenti.",
        "cookie_tech_title": "Cookie Tecnici",
        "cookie_tech_desc": "I cookie tecnici sono necessari per il funzionamento del sito. Ad esempio, utilizziamo un cookie per ricordare la tua preferenza sulla chiusura del banner informativo.",
        "cookie_disable_title": "Come disabilitare i cookie",
        "cookie_disable_desc": "Puoi disabilitare i cookie direttamente dalle impostazioni del tuo browser. Tieni presente che la disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.",
        "home_link": "Torna alla Home",
        "404_heading": "Oops! Pagina non trovata.",
        "404_text": "La pagina che stai cercando potrebbe essere stata rimossa, aver cambiato nome o essere temporaneamente non disponibile."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Detect browser language
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0]; // e.g., 'it', 'en'

    // If the language is Italian, apply the translations
    if (langCode === 'it' && translations['it']) {
        document.documentElement.lang = 'it';
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations['it'][key]) {
                el.innerHTML = translations['it'][key];
            }
        });
    } else {
        // Otherwise, keep the default English
        document.documentElement.lang = 'en';
    }
});