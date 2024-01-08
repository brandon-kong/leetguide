import { getFullUrl } from "./util/url";

chrome.runtime.onMessage.addListener(async (request) => {
  if (request.action === 'openSignInPage') {
    const url = await getFullUrl();

    if (!url) return;

    const params = new URLSearchParams();
    params.set('redirect', url);
    params.set('extension', 'chrome');
    params.set('extensionId', chrome.runtime.id);

    params.set('clientId', import.meta.env.VITE_CLIENT_ID);
    params.set('scope', import.meta.env.VITE_SCOPE);
    
    chrome.tabs.create({ url: `${import.meta.env.VITE_HOST_AUTHORIZE_PAGE}?${params.toString()}` });
  }
});