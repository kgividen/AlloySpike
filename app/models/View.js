exports.definition = {
    config : {
        "columns" : {
            "name" : "TEXT",
            "type" : "TEXT"
        },
        "defaults" : {
            "name" : "",
            "type" : "unknown"
        },
        "adapter" : {
            "type" : "sql",
            "collection_name" : "alloySpikeViews"
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