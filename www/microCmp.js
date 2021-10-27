var microCmp = {
    currentLanguage: 'fr',
    htmlElements: {
        notice: document.querySelector(".microCmp_notice"),
        text: document.querySelector(".microCmp_text"),
        accept: document.querySelector(".microCmp_button.microCmp_accept"),
        refuse: document.querySelector(".microCmp_refuse.microCmp_refuse"),
    },
    translations: {
        fr: {
            text: "Nous utilisons des cookies pour mieux comprendre votre comportement en ligne, améliorer nos services, communiquer avec vous, personnaliser le contenu ou la publicité sur nos plateformes et vous offrir des fonctionnalités liées aux médias sociaux. Pour en savoir plus, suivez <a href='#' class='microCmp_link'>ce lien</a>",
            link: "https://privacy.thewaltdisneycompany.com/fr/regles-de-respect-de-la-vie-privee/quest-ce-quun-cookie/",
            accept: "TOUT ACCEPTER",
            refuse: "TOUT BLOQUER"
        },
        en: {
            text: "we use cookies. Read more on <a href='#' class='miroCmp_link'>this link</a>",
            link: "https://privacy.thewaltdisneycompany.com/fr/regles-de-respect-de-la-vie-privee/quest-ce-quun-cookie/",
            accept: "ACCEPT ALL",
            refuse: "BLOCK ALL"
        }
    },
    triggerOnConsent: new Promise((resolve, reject) => {
        consentIsResolved = resolve
    }),
    addTranslation: function(language, translation) {
        microCmp.translations[language] = translation
    },
    reset: function() {
        microCmp.htmlElements.notice.classList.add("microCmp_active")
        microCmp.setCookie("consent", "undefined", -1)
        window.location.reload()
    },
    open: function() {
        microCmp.htmlElements.notice.classList.add("microCmp_active")
    },
    accept: function() {
        microCmp.consentStatus = true;
        microCmp.htmlElements.notice.classList.remove("microCmp_active")
        microCmp.setCookie("consent", true, 180)
        consentIsResolved()
    },
    refuse: function() {
        microCmp.consentStatus = false;
        microCmp.htmlElements.notice.classList.remove("microCmp_active")
        microCmp.setCookie("consent", false, 180)
    },
    setLanguage: function(language) {
        microCmp.currentLanguage = language;
    },
    getConsent: function() {
        if (microCmp.getCookie("consent") == 'true') {
            return true
        } else {
            return false
        }
    },
    getCookie: function(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    setCookie: function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    toTriggerOnConsent: [],
    init: function() {
        microCmp.htmlElements.notice = document.querySelector(".microCmp_notice")
        microCmp.htmlElements.text = document.querySelector(".microCmp_text")
        microCmp.htmlElements.accept = document.querySelector(".microCmp_accept")
        microCmp.htmlElements.refuse = document.querySelector(".microCmp_refuse")
        microCmp.htmlElements.text.innerHTML = microCmp.translations[microCmp.currentLanguage].text
        microCmp.htmlElements.link = document.querySelector(".microCmp_link")
        microCmp.htmlElements.link.href = microCmp.translations[microCmp.currentLanguage].link
        microCmp.htmlElements.accept.innerText = microCmp.translations[microCmp.currentLanguage].accept
        microCmp.htmlElements.refuse.innerText = microCmp.translations[microCmp.currentLanguage].refuse
        if (microCmp.getCookie("consent") == 'undefined' || microCmp.getCookie("consent") == '') {
            microCmp.htmlElements.notice.classList.add("microCmp_active")
        } else if (microCmp.getConsent()) {
            consentIsResolved()
        }
        microCmp.htmlElements.accept.addEventListener("click", function() {
            microCmp.accept()

        })
        microCmp.htmlElements.refuse.addEventListener("click", function() {
            microCmp.refuse()
        })
        microCmp.triggerOnConsent
            .then(
                function() {

                    var processing = false;
                    var checkqueue = setInterval(function() {

                        if (!processing && microCmp.getConsent()) {
                            processing = true;
                            while (microCmp.toTriggerOnConsent.length > 0) {
                                microCmp.toTriggerOnConsent.shift().apply();
                            }
                            processing = false;
                        }

                    }, 10)
                }
            );
    }
}