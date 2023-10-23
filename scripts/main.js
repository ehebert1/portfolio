let lang = "en"

window.onload = () => {
    if (document.cookie.split("; ").find((row) => row.startsWith("lang=")) === undefined) {
        document.cookie = `lang=en;max-age=${7 * 24 * 60 * 60}`
    }
    const lang = document.cookie
        .split("; ")
        .find((row) => row.startsWith("lang="))
        ?.split("=")[1];
}