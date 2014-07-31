exports.definition = {
    config : {
        "columns" : {
//            "sortId" : "INTEGER",
            "name" : "TEXT",
            "displayName" : "TEXT",
            "address" : "TEXT",
//            "showInView" : "INTEGER",
            "type" : "TEXT",
            "parent" : "TEXT"
        },
        "defaults" : {
//            "sortId" : 0,
            "name" : "",
            "displayName" : "",
            "address" : "",
//            "showInView" : 0,
            "type" : "unknown",
            "parent" : "unknown"
        },
        "adapter" : {
            "type" : "sql",
            "collection_name" : "alloySpikeDevices"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {

        });

        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(collection) {
//                return collection.get('sortId');
            }
        });
        return Collection;
    }
};