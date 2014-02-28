var TreasureHunt = (function(app) {
    "use strict";

    var Routeur = Backbone.Router.extend({
        routes: {
            'snap' : 'snap',
            'mytreasures' : 'mytreasures',
            'treasures' : 'treasures',
            'compare' : 'compare',
			'send' : 'send'
        },
		
		snap: function() {
            $('body').css('background', '#3B9A92').css('color','#fff');
			$('#content > *').detach();
			app.select(1);
			
			app.views.snap = new app.Views.snap({});
			app.views.snap.render();
			app.views.snap.$el.appendTo('#content');
			
			navigator.camera.getPicture(onSuccess, onFail, {quality:50, destinationType: Camera.DestinationType.FILE_URI });
		
			function onSuccess (imageURI) {
				app.collections.mytreasures.add(new app.Models.MyTreasures({id : imageURI}));
				alert ('Félicitation vous avez un nouveau trésor');
				
			}
			
			function onFail (imageURI) {
				alert( message);
				
			}
			
        },
		mytreasures: function() {
			$('body').css('background', '#3B9A92');
			$('#content > *').detach();
			app.select(2);
			var photoURI='';
			app.views.mytreasures = new app.Views.MyTreasures({collection : app.collections.mytreasures});
			app.views.mytreasures.render();
			app.views.mytreasures.$el.appendTo('#content');
			
            
        },
		 treasures: function() {
			$('body').css('background', '#3B9A92');
			$('#content > *').detach();
			app.select(3);
         
			 app.views.treasures = new app.Views.Treasures({});
			 app.views.treasures.render();
			 app.views.treasures.$el.appendTo('#content');
			
            
        },
		 compare: function() {
			$('body').css('background', '#ddd');
			$('#content > *').detach();
			app.select(4);
			
			
			app.views.compare = new app.Views.Compare({collection : app.collections.mytreasures});
			app.views.compare.render();
			app.views.compare.$el.appendTo('#content');
		
        },
		 send: function() {
			$('#content > *').detach();
			app.select(5);
        },
		
		
	});

    app.routeur = new Routeur();

    return app;
})(TreasureHunt);