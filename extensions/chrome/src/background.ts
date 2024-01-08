import { getFullUrl } from "./util/url";

chrome.runtime.onMessage.addListener(async (request) => {
  if (request.action === 'openSignInPage') {
    const url = await getFullUrl();

    if (!url) return;

    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.local.set({ previousTabId: currentTab.id });

    const params = new URLSearchParams();
    params.set('redirect', url);
    params.set('extension', 'chrome');
    params.set('extensionId', chrome.runtime.id);

    params.set('clientId', import.meta.env.VITE_CLIENT_ID);
    params.set('scope', import.meta.env.VITE_SCOPE);
    
    chrome.tabs.create({ url: `${import.meta.env.VITE_HOST_AUTHORIZE_PAGE}?${params.toString()}` });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    const url = new URL(changeInfo.url);
    const authorized = url.searchParams.get('authorized');
    if (authorized === 'true') {
      // the user has authorized
      chrome.tabs.remove(tabId);

      // go back to the previous tab
      chrome.storage.local.get('previousTabId', function(data) {
        if (data.previousTabId) {
          chrome.tabs.update(data.previousTabId, { active: true });
        }
      });
    }
  }
});