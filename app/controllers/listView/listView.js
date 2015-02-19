var args = arguments[0] || {};

//Start here
Alloy.Collections.device.fetch();



function doTransform(model) {
    var modelJSON = model.toJSON();
    Ti.API.debug("modelJSON: " + JSON.stringify(modelJSON));

    // return the object
    var modelParams = {
        displayName : model.displayName,
        modelId : modelJSON.id,
        template : $.collectionType
    };

    return modelParams;
};





//Listeners for ListItems
function deviceRowChange(e) {
    Ti.API.info("e: " + JSON.stringify(e));
    $model.save({
        showInView: (e.value) ? 1 : 0
    },{
        silent: true
    });
}


$.list.addEventListener('itemclick', function(e){
    Ti.API.debug("Item was clicked!");
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
    }
    else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
    }
    e.section.updateItemAt(e.itemIndex, item);
    alert(
            "ItemId: " + e.itemId + "\n" +
            "BindId: " + e.bindId + "\n"
//            "Items: " + e.section.items + "\n" +
//            "Section Index: " + e.sectionIndex + ", Item Index: " + e.itemIndex
    );

    Ti.API.debug("e: " + JSON.stringify(e));
    Ti.API.debug("e section: " + JSON.stringify(e.section));
    Ti.API.debug("e section items: " + JSON.stringify(e.section.items));
});









//Listeners for Data stuff
$.closeBtn.addEventListener("click", function(){
//    if(osname=="android"){
//        updateViewsSortOrderAndroid();
//    } else {
//        if($.devicesTableView.data[0]) {
//            var data = $.devicesTableView.data[0].rows;
//            updateViewsSortOrder(data);
//        }
//    }
    $.win.close();
});

$.createFakeDataBtn.addEventListener("click", function(){
    var fakeData = createFakeData(250);
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

//$.addRowBtn.addEventListener("click", function(){
//    var num = Math.floor(Math.random()*90000) + 10000;
//    var newItem = {
//        id:num,
//        sortId:10,
//        name: "name" + num,
//        displayName: "DName" + num,
//        address: num,
//        showInView: 1,
//        type: "type1"
//    };
//    Alloy.createModel('Device', newItem).save();
//    Alloy.Collections.device.fetch();
//});

var data = [];

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
