import { getFullUrl } from "./util/url";

chrome.runtime.onMessage.addListener(async (request) => {
  if (request.action === 'openSignInPage') {
    const url = await getFullUrl();

    if (!url) return;

    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.local.set({ previousTabId: currentTab.id });

    const params = new URLSearchParams();
    params.set('redirect', url);
    params.set('type', 'extension');
    params.set('extension', 'chrome');
    params.set('extensionId', chrome.runtime.id);

    params.set('clientId', import.meta.env.VITE_CLIENT_ID);
    params.set('scope', import.meta.env.VITE_SCOPE);
    
    chrome.tabs.create({ url: `${import.meta.env.VITE_HOST_AUTHORIZE_PAGE}?${params.toString()}` });
  }

  else if (request.action === 'authorized') {
    const url = await getFullUrl();

    if (!url) return;

    const code = request.code;

    const params = new URLSearchParams();
    params.set('redirect', url);
    params.set('type', 'extension');
    params.set('extension', 'chrome');
    params.set('extensionId', chrome.runtime.id);

    params.set('clientId', import.meta.env.VITE_CLIENT_ID);
    params.set('scope', import.meta.env.VITE_SCOPE);
    params.set('code', code);

    chrome.storage.local.set({ code });

    // open the extension popup
  }

  else if (request.action === 'logout') {
    chrome.storage.sync.remove('code');
    chrome.storage.local.remove('code');
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    const url = new URL(changeInfo.url);
    const authorized = url.searchParams.get('authorized');
    const code = url.searchParams.get('code');

    if (authorized === 'true') {
      // the user has authorized
      chrome.tabs.remove(tabId);

      // send the code to the background script

      chrome.runtime.sendMessage({ action: 'authorized', code });

      chrome.storage.local.set({ code });


      // go back to the previous tab
      chrome.storage.local.get('previousTabId', function(data) {
        if (data.previousTabId) {
          chrome.tabs.update(data.previousTabId, { active: true });
        }
      });
    }
  }
});