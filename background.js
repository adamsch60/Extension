

chrome.alarms.onAlarm.addListener(function(alarm){
  chrome.downloads.download({url:list_url[list_name.indexOf(alarm.name)]});
  list_url.splice(list_name.indexOf(alarm.name),1);
  list_name.splice(list_name.indexOf(alarm.name),1);
})
