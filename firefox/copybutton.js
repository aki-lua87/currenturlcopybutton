browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({ windowId: browser.windows.WINDOW_ID_CURRENT, active: true }).then(tabs => {
        for (let tab of tabs) {
            navigator.clipboard.writeText(tab.url);
        }
    });
});