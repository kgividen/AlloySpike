
$.win.open();

function openTableView(){
    Alloy.createController("tableView/tableView").getView().open();
}

function openTableViewByView(){
    Alloy.Collections.deviceInView.fetch();
    Alloy.Globals.deviceInViewJSON = Alloy.Collections.deviceInView.toJSON(); //So we can access it in the tableViewRow
    Alloy.createController("tableViewByView/tableView").getView().open();
}

function openCountDown(){
    Alloy.createController("countdown").getView().open();
}

var countSeconds = 6,   //How many seconds to countdown.
    endMsg = "Start!";  //What message to display after countdown is finished.

$.countdownWidget.init(countSeconds,endMsg);

function openCountDownWidget(){
    $.countdownWidget.start();
}

function openLinkInStore(){
    Ti.API.info("open!!") ;
    Ti.Platform.openURL('itms://itunes.apple.com/us/app/fun-memory-game/id881939773?mt=8&uo=4');
}

//If it's run 10 times then open it
var appId = "APPID",   //App ID for itunes or GooglePlay
    appName = "CoolApp", //Name of you APP for the Title
    appMsg = "If you enjoy using CoolApp, would you mind taking a moment to rate it?  Thanks!",//Message you want to display to the user to get them to rate it.
    runEvery = 3, //How many times can they run the app before being prompted to rate it.
    appDebug = true; //If set to true it will run it every time.
$.rating.init(appId, appName, appMsg, runEvery, appDebug);

$.win.addEventListener('open', function(e) {
    $.rating.run();
});

function openRatingWidget(){
    $.rating.run();
}

function clearRating() {
    $.rating.clear();
}

if(osname == "android") {
    $.win.addEventListener('open', function () {
        $.win.activity.actionBar.hide();
    });
}