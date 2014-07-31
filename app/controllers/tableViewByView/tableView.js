//We have to pass in the data on Android because we are swapping the rows manually.
function updateViewsSortOrder(deviceTvData){
    var i = 0;
    _.each(deviceTvData, function (d) {
        var model = Alloy.Collections.device.get(d.alloy_id);
        if (model) model.save({sortId: i}, {silent: true});
        i++;
    });
}

function updateViewsSortOrderAndroid(){
    if($.devicesTableView.data[0]) {
        var deviceTvData = $.devicesTableView.data[0].rows;
        _.each(deviceTvData, function (d) {
            var model = Alloy.Collections.device.get(d.alloy_id);
            var sortId = d.getChildren()[3].value;
            if (model) model.save({sortId: sortId}, {silent: true});
        });
    }
}

//Start here
Alloy.Collections.device.fetch();



//Listeners
$.closeBtn.addEventListener("click", function(){
    if(osname=="android"){
        updateViewsSortOrderAndroid();
    } else {
        if($.devicesTableView.data[0]) {
            var data = $.devicesTableView.data[0].rows;
            updateViewsSortOrder(data);
        }
    }
    $.win.close();
});

$.createFakeDataBtn.addEventListener("click", function(){
    var fakeData = createFakeData(10);
    Alloy.Collections.device.reset(fakeData);
    _.each(fakeData, function (item) {
        var deviceModel = Alloy.createModel('Device', item);
        deviceModel.save({silent: true});
    });
});

$.deleteDataBtn.addEventListener("click", function(){
    var db=Ti.Database.open('_alloy_');
    db.execute('DELETE FROM alloySpikeDevices');
    db.close();
    Alloy.Collections.device.reset();
});

$.addRowBtn.addEventListener("click", function(){
    var num = Math.floor(Math.random()*90000) + 10000;
    var newItem = {
        id:num,
        sortId:10,
        name: "name" + num,
        displayName: "DName" + num,
        address: num,
        showInView: 1,
        type: "type1"
    };
    Alloy.createModel('Device', newItem).save();
    Alloy.Collections.device.fetch();
});

var data = [];

//ANDROID MOVE ORDER OF ROWS IN TABLE VIEW CODE
$.devicesTableView.addEventListener('click', function(e) {

    data = $.devicesTableView.data[0].rows;
    var action = e.source.action,
        index = e.index,
        isFirstRow = index === 0,
        isLastRow = index + 1 === data.length;

    Ti.API.info("Clicked!!!!" + action);


    if(action === 'moveUp' && !isFirstRow) {
        swapRows(index, index - 1);
    } else if(action === 'moveDown' && !isLastRow) {
        swapRows(index, index + 1);
    }

});

function swapRows(indexOne, indexTwo) {
    Ti.API.info("swapRows");
    var temp = data[indexOne];
    data[indexOne] = data[indexTwo];
    data[indexTwo] = temp;
    $.devicesTableView.data = data;
}







//Utility Functions

function createFakeData(num){
    var fakeData = [];
    for (i = 0; i < num; i++){
        var random = Math.floor(Math.random()*90000) + 10000;
        var obj = {
            id:random,
            sortId:10,
            name: "name" + random,
            displayName: "DName" + random,
            address: random,
            type: "type1"
        };
        fakeData.push(obj);
    }
    return fakeData;
}