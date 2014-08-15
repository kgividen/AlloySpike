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

if(osname == "android") {
    $.win.addEventListener('open', function () {
        $.win.activity.actionBar.hide();
    });
}