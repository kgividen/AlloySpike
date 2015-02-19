var args = arguments[0] || {};

if ($model) {
    $.deviceRow.model = $model.toJSON();
    var displayName = $model.get('displayName');
    $.btn.title = displayName;

    $.btn.addEventListener('click', function(){
        $model.set('displayName', "blah");
    });
}

