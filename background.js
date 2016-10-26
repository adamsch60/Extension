var list_url=[];
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.msg == "list_url") {
        sendResponse(list_url);
        return true;
    }
});
var list_name=[];
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.msg == "list_name") {
        sendResponse(list_name);
        return true;
    }
});


chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.downloads.download({url:list_url[list_name.indexOf(alarm.name)]});
  list_url.splice(list_name.indexOf(alarm.name),1);
  list_name.splice(list_name.indexOf(alarm.name),1);
})
