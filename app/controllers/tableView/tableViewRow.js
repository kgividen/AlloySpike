if ($model) {
    if($model.get('showInView')){
        $.deviceRowSwitch.setValue(true);
    }else{
        $.deviceRowSwitch.setValue(false);
    }
}

$.deviceRowSwitch.addEventListener('change', function(e) {
    Ti.API.info("e: " + JSON.stringify(e));
    $model.save({
        showInView: (e.value) ? 1 : 0
    },{
        silent: true
    });
});
