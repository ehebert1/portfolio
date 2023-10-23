let lang = "en"
let dataStrings;

window.onload = () => {
    if (document.cookie.split("; ").find((row) => row.startsWith("lang=")) === undefined) {
        document.cookie = `lang=en;max-age=${7 * 24 * 60 * 60}`
    }
    const lang = document.cookie
        .split("; ")
        .find((row) => row.startsWith("lang="))
        ?.split("=")[1];

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
            elm.textContent = dataStrings[lang][elm.attributes["data-string"].value]
        })
}