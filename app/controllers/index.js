$.win.open();

function openTableView(){
    Alloy.createController("tableView/tableView").getView().open();
}

if(osname == "android") {
    $.win.addEventListener('open', function () {
        $.win.activity.actionBar.hide();
    });
}