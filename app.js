const CONTEXT_MENU_ID = "INSERT_UNIQUE_EMAIL_ID_MENU";

function getClickHandler(info, tab) {
  chrome.tabs.sendMessage(tab.id, '');
};

chrome.contextMenus.create({
  title: "Insert Unique Email",
  contexts:["editable"],
  id: CONTEXT_MENU_ID
});

chrome.contextMenus.onClicked.addListener(getClickHandler);
