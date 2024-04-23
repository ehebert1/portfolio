class UrlParamManager {
    static getUrlParam(paramName) {
        return document.baseURI
            .split("?")[1]
            ?.split("&")
            ?.find((elm) => elm.startsWith(paramName))
            ?.split("=")[1]
    }
}