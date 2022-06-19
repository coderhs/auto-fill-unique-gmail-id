// Saves options to chrome.storage
function save_options() {
  var uege_username = document.getElementById('username').value;
  var uege_domain = document.getElementById('domain').value;
  chrome.storage.sync.set({
    uege_username: uege_username,
    uege_domain: uege_domain
  }, function() {
    // Update status to let user know options were saved.
    alert('saved');
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    uege_username: '',
    uege_domain: 'gmail.com'
  }, function(items) {
    document.getElementById('username').value = items.uege_username;
    document.getElementById('domain').value = items.uege_domain;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
