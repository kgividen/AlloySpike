//var fakeData =[
//    {
//        sortId:0,
//        name: "fakeName1",
//        displayName: "FakeDisplayName1",
//        address: "123",
//        showInView: 1,
//        type: "type1"
//    },
//    {
//        sortId:1,
//        name: "fakeName2",
//        displayName: "FakeDisplayName2",
//        address: "1234",
//        showInView: 1,
//        type: "type1"
//    }
//];

//Reset to default fake data
//Alloy.Collections.device.reset(fakeData);
//
//_.each(fakeData, function (item) {
//    var deviceModel = Alloy.createModel('Device', item);
//    deviceModel.save();
//});
//

//We have to pass in the data on Android because we are swapping the rows manually.
function updateViewsSortOrder(deviceTvData){
    var i = 0;
    _.each(deviceTvData, function (d) {
        var model = Alloy.Collections.device.get(d.alloy_id);
        model.save({sortId: i}, {silent: true});
        i++;
    });
}

//Start here
Alloy.Collections.device.fetch();


//Listeners
$.closeBtn.addEventListener("click", function(){
    var data = $.devicesTableView.data[0].rows;
    updateViewsSortOrder(data);
    $.win.close();
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

//    data = $.devicesTableView.data[0].rows;
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
    Ti.API.info("Swap Rows!!!!");
    var temp = data[indexOne];
    data[indexOne] = data[indexTwo];
    data[indexTwo] = temp;
//    updateViewsSortOrderAndroid(data);
}