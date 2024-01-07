export const getFullUrl = (): Promise<string | undefined> =>  {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0]) {
                const currentUrl = tabs[0].url;

                if (!currentUrl) reject('No url found');

                resolve(currentUrl);
            } else {
                reject('No active tab found');
            } 
        });
    });
}