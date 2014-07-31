if ($model) {
    //If this model is in the view we are on then switch is on
    var modelId = $model.get('alloy_id');
    var isModelInView = _.where(Alloy.Globals.deviceInViewJSON,{DeviceId:modelId, ViewId:"123"}).length > 0;

    if(isModelInView){
        $.deviceRowSwitch.setValue(true);
    }else{
        $.deviceRowSwitch.setValue(false);
    }
}

$.deviceRowSwitch.addEventListener('change', function(e) {
//    Ti.API.info("e: " + JSON.stringify(e));
//    $model.save({
//        showInView: (e.value) ? 1 : 0
//    },{
//        silent: true
//    });
    var viewId = "123";
    var deviceId = $model.get('alloy_id');
    Ti.API.info("deviceId: " + deviceId);
    var model = {
        "DeviceId" : deviceId,
        "ViewId" : viewId,
        "SortId" : 0
    };

    if(e.value){
        //Add record to DeviceInView
        Alloy.createModel('DeviceInView', model).save({silent: true});
    } else {
        //Remove record from DeviceInView
        var devices = Alloy.Collections.deviceInView.where({"DeviceId" : deviceId});
        _.each(devices, function(device){
            device.destroy();
        });
    }
});
