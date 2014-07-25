var fakeData =[
    {
        sortId:0,
        name: "fakeName1",
        displayName: "FakeDisplayName1",
        address: "123",
        showInView: 1,
        type: "type1"
    },
    {
        sortId:1,
        name: "fakeName2",
        displayName: "FakeDisplayName2",
        address: "1234",
        showInView: 1,
        type: "type1"
    }
];


Alloy.Collections.device.reset(fakeData);

//Add all of the new records in the collection that came from the hardware device.
_.each(fakeData, function (item) {
    //We only want to add new devices.
    var deviceModel = Alloy.createModel('Device', item);
    deviceModel.save();
});
Alloy.Collections.device.fetch();

$.closeBtn.addEventListener("click", function(){
    $.win.close();
});

$.deleteDataBtn.addEventListener("click", function(){
    var db=Ti.Database.open('_alloy_');
    var deleteRecords=db.execute('DELETE FROM Devices');
    db.close();
    Alloy.Collections.device.reset();
});