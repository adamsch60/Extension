var list_url=[];
var list_name=[];

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.downloads.download({url:list_url[list_name.indexOf(alarm.name)]});
  list_url.splice(list_name.indexOf(alarm.name),1);
  list_name.splice(list_name.indexOf(alarm.name),1);
})

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var link = document.getElementById('link').value;
        var time = Number(document.getElementById('time').value);
        chrome.alarms.create(name, {delayInMinutes: time});
        list_url.push(link);
        list_name.push(name);
    });
});
