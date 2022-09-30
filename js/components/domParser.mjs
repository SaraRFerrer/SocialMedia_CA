const domParser = new DOMParser();

export default function (htmlString) {
    return domParser.parseFromString(htmlString, "text/html");
}