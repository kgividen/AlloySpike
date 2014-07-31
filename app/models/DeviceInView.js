exports.definition = {
    config : {
        "columns" : {
            "DeviceId" : "TEXT",
            "ViewId" : "TEXT",
            "SortId" : "INTEGER"
        },
        "defaults" : {
            "DeviceId" : "",
            "ViewId" : "unknown",
            "SortId" : 0
        },
        "adapter" : {
            "type" : "sql",
            "collection_name" : "alloySpikeDeviceInView"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {

        });

        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {

        });
        return Collection;
    }
};