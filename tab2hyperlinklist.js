browser.browserAction.onClicked.addListener(listTabs);

function listTabs() {
    var tabsList = browser.tabs.query({});
    tabsList.then(logTabs, onError);
}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
            /* clipboard successfully set */
            console.log('successfully set!');
        }, function() {
            /* clipboard write failed */
            onError('failed!');
    });
}

function logTabs(tabs){
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = new Date();
    var today = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    
    let html = " ";

    for (let tab of tabs){
        html += '<li><span>'+today+'</span> &raquo; <a href="'+tab.url+'">'+tab.title+'</a></li>\n';
    }

    updateClipboard(html)
}
  
function onError(error) {
    console.log(`Error: ${error}`);
}
  