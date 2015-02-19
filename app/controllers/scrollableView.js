var args = arguments[0] || {};

$.device.fetch();

$.closeBtn.addEventListener('click', function(){
    $.win.close();
});

function filter1(collection){
//    Ti.API.debug("collection: " + JSON.stringify(collection));
    return collection.where({
        address:"18256.0"
    });
}