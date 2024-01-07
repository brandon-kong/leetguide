import { getFullUrl } from "./util/url";

chrome.runtime.onMessage.addListener(async (request) => {
  if (request.action === 'openSignInPage') {
    const url = await getFullUrl();

    chrome.tabs.create({ url: `http://localhost:3000/sign-in?redirect=${url}` });
  }
});