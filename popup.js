function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}



chrome.alarms.onAlarm.addListener(function(alarm){
chrome.downloads.download({url:alarm});
})





document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        var link = document.getElementById('link');
        var time = document.getElementById('time');
        chrome.alarms.create(link, {
        delayInMinutes: time});
    });

    // onClick's logic below:

    


        
      // Put the image URL in Google search.     
});
