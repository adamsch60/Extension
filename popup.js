var list;

chrome.alarms.onAlarm.addListener(function(alarm){
chrome.downloads.download({url:link.last()});
})

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        var link = document.getElementById('link').value;
        var time = document.getElementById('time').value;
        chrome.alarms.create(req, {delayInMinutes: time});
      list.push(link);
    });
});
