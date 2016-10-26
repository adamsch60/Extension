var llist_url=[];
var llist_name=[];


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var link = document.getElementById('link').value;
        var time = Number(document.getElementById('time').value);
        chrome.alarms.create(name, {delayInMinutes: time});
        chrome.runtime.sendMessage({msg: "list_url"}, function(response) {
         llist_url=response;
        });
        chrome.runtime.sendMessage({msg: "list_name"}, function(response) {
         llist_name=response;
        });
        list_url.push(link);
        list_name.push(name);
    });
});
