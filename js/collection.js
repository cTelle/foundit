var TreasureHunt = (function(app) {
    "use strict";

    app.Collections.MyTreasures = Backbone.Collection.extend({
        modele : app.Models.MyTreasures
    });
    app.collections.mytreasures = new app.Collections.MyTreasures();
	
	app.collections.mytreasures.add(new app.Models.MyTreasures({id : 'img/photos/1.PNG'}));
	app.collections.mytreasures.add(new app.Models.MyTreasures({id : 'img/photos/2.PNG'}));
	app.collections.mytreasures.add(new app.Models.MyTreasures({id : 'img/photos/3.PNG'}));

	

    return app;
})(TreasureHunt);

