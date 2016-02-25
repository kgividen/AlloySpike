
$.win.open();
// Alloy.createController("test").getView().open();

function openTableView(){
    Alloy.createController("tableView/tableView").getView().open();
}

function openListView(){
    Alloy.createController("listView/listView").getView().open();
}

function openScrollableView(){
    Alloy.createController("scrollableView").getView().open();
}

function openTestView(){
    Alloy.createController("test").getView().open();
}

function openTableViewSecond(){
    Alloy.createController("tableViewSecond/tableView").getView().open();
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

function openCircularSliderView(){
    Ti.API.info("open circular slider View!!");
    Alloy.createController("circularSlider").getView().open();
}

function openCircularProgressBarView(){
    Ti.API.info("open circular progress bar View!!");
    Alloy.createController("circularProgressBar").getView().open();
}

function openTiCircularSliderBtn(){
    Ti.API.info("TiCircularSliderBtn!!");
    Alloy.createController("TiCircularSliderBtn").getView().open();
}


function openPhotoGrid(){
    var data = [
            {title:'President Thomas S Monson', thumb:'/images/apostles/Monson_tn.png', image:'http://media.ldscdn.org/images/media-library/church-leadership/first-presidency-and-quorum-of-the-twelve-apostles/president-thomas-s-monson-lds-591264-gallery.jpg'},
            {title:'President Henry B Eyring', thumb:'/images/apostles/Eyring_tn.png', image:'http://media.ldscdn.org/images/media-library/church-leadership/first-presidency-and-quorum-of-the-twelve-apostles/president-henry-b-eyring-lds-462519-gallery.jpg'},
            {title:'President Dieter F Uchtdorf', thumb:'/images/apostles/Uchtdorf_tn.png', image: 'http://media.ldscdn.org/images/media-library/church-leadership/first-presidency-and-quorum-of-the-twelve-apostles/president-dieter-f-uchtdorf-lds-495749-gallery.jpg'},
            {title:'President Boyd K Packer', thumb:'/images/apostles/Packer_tn.png', image: 'http://media.ldscdn.org/images/media-library/church-leadership/first-presidency-and-quorum-of-the-twelve-apostles/elder-boyd-k-packer-lds-82365-gallery.jpg'}
        ];

    var photogrid = Alloy.createWidget("de.manumaticx.photogrid");

    var gridWindow = photogrid.createWindow({
        data: data,
        interval: 3000,
        showTitle: true
    });

    gridWindow.open();
}

//If it's run 10 times then open it
var appId = "APPID",   //App ID for itunes or GooglePlay
    appName = "CoolApp", //Name of you APP for the Title
    appMsg = "If you enjoy using CoolApp, would you mind taking a moment to rate it?  Thanks!",//Message you want to display to the user to get them to rate it.
    runEvery = 10, //How many times can they run the app before being prompted to rate it.
    appDebug = false; //If set to true it will run it every time.
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