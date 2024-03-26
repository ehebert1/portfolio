class CookieManager {
    static getCookie(key) {
        return document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${key}=`))
            ?.split("=")[1];
    }

    static setCookie(key, value, time = 7 * 24 * 60 * 60) {
        document.cookie = `${key}=${value};max-age=${time}`
    }
}