var APP_ID = '';

exports.run = function(appId, appName, appText, runEvery, appDebug){
    APP_ID = appId;

    var timesRun = Ti.App.Properties.getInt('com.netsmartcompany.timesRun' + APP_ID);
    var hasRated = Titanium.App.Properties.getBool('com.netsmartcompany.hasRated.' + APP_ID);

    //Set it to default of 0 if it's never been set before
    if(!typeof timesRun){
        Ti.App.Properties.setInt('com.netsmartcompany.timesRun' + APP_ID, 0);
    }

    Ti.API.info("timesRun: " + timesRun + " hasRated: " + hasRated + " debug: " + appDebug);
    if(!hasRated || appDebug) {
        $.appTitle.text = appName;
        $.appBody.text = appText;
        Ti.API.info("timesRun: " + timesRun + " timesRunMod:" + timesRun % runEvery + " debug: " + appDebug);
        if ((timesRun % runEvery) == runEvery -1 || appDebug) {
            Ti.API.info("open ratings!!");
            $.ratingWin.open();
        }
        Ti.App.Properties.setInt('com.netsmartcompany.timesRun' + APP_ID, timesRun + 1);
    }
};

exports.clear = function(appID){
    Ti.App.Properties.setInt('com.netsmartcompany.timesRun' + appID, 0);
    Titanium.App.Properties.setBool('com.netsmartcompany.hasRated.' + appID, false);
};

function closeWin(){
    $.ratingWin.close();
}

$.ratingView.addEventListener('click', function(e) {
    var action = e.source.action;
    if (action === "rate") {
        if (osname == 'ios') {
            Ti.API.info("APP_ID: " + APP_ID);
            Ti.Platform.openURL('itms-apps://itunes.apple.com/app/id' + APP_ID);
        } else {
            Ti.Platform.openURL('market://details?id=' + APP_ID);
        }

        Titanium.App.Properties.setBool('com.netsmartcompany.hasRated.' + APP_ID, true);

    } else if (action === "bummer") {
        Titanium.App.Properties.setBool('com.netsmartcompany.hasRated.' + APP_ID, true);
    }
    closeWin();
});