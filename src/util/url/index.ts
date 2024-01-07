export const appendQueryParams = (url: string, params: { [key: string]: string }) => {
    let urlObj = url + '?';
    Object.keys(params).forEach((key) => {
        urlObj += `${key}=${params[key]}&`;
    });

    urlObj = urlObj.slice(0, -1);
    return urlObj.toString();
}