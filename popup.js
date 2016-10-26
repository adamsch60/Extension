
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var link = document.getElementById('link').value;
        var time = Number(document.getElementById('time').value);
        chrome.alarms.create(name, {delayInMinutes: time});
        chrome.runtime.sendMessage({msg: "list_url",link: link}, function(response) {
        });
        chrome.runtime.sendMessage({msg: "list_name", name:name}, function(response) {
        });
    });
});
