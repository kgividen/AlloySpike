//Start here
$.device2.fetch();

//Listeners
$.closeBtn.addEventListener("click", function(){
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