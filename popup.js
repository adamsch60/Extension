function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}



chrome.alarms.onAlarm.addListener(function(alarm){
chrome.downloads.download({url:" https://developer.chrome.com/extensions/examples/tutorials/getstarted/manifest.json"});
})





document.addEventListener('DOMContentLoaded', function() {
        chrome.alarms.create("download", {
        delayInMinutes: 0.1});

        
      // Put the image URL in Google search.     
});
