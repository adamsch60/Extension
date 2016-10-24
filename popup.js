function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}



document.addEventListener('DOMContentLoaded', function() {
   chrome.fileBrowserHandler.onExecute.addListener(function(id, details) {
        if (id == 'upload') {
          var fileEntries = details.entries;
          for (var i = 0, entry; entry = fileEntries[i]; ++i) {
            entry.file(function(file) {
              // send file somewhere
            });
          }
        }
      });
    // Put the image URL in Google search.     
});
