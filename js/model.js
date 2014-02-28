var TreasureHunt = (function(app) {
    "use strict";

    app.Models.MyTreasures = Backbone.Model.extend({
        shemas: {
			id: {type: 'Text'},
        }
    });
	

    return app;
})(TreasureHunt);