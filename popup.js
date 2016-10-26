var list_url=[];
var list_name=[];


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
