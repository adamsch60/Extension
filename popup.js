function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}



document.addEventListener('DOMContentLoaded', function() {
chrome.downloads.download({url:" https://developer.chrome.com/extensions/examples/tutorials/getstarted/manifest.json"});
    // Put the image URL in Google search.     
});
