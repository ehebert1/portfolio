let lang = "en"
let dataStrings;

window.onload = () => {
    if (CookieManager.getCookie("lang") === undefined) {
        CookieManager.setCookie("lang", "en")
        document.cookie = `lang=en;max-age=${7 * 24 * 60 * 60}`
    }
    lang = CookieManager.getCookie("lang")

    fetch("/data/dictionnary.json")
        .then((response) => response.json())
        .then((json) => {
            dataStrings = json
            updateStrings()
        })
}

function updateStrings() {
    document.querySelectorAll("[data-string]")
        .forEach((elm) => {
            elm.textContent = dataStrings[lang.toLowerCase()][elm.attributes["data-string"].value]
        })
}

function langSwitch() {
    assignLangCookie(dataStrings[lang.toLowerCase()]["lang"].toLowerCase())
    updateStrings()
}

function assignLangCookie(language) {
    CookieManager.setCookie("lang", language.toLowerCase())
    lang = CookieManager.getCookie("lang")
}