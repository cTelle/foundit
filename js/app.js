
var TreasureHunt = (function(app) {
    "use strict";

    app = {
        // Classes
        Models: {},
        Views: {},
		Collections: {},
        // Instances
        views: {},
        models: {},
		collections: {},

        // Begin user interaction
        start: function() {
          if (! (nav)) {
				var nav = new app.Views.Navigation();
                nav.render();
                nav.$el.insertAfter('#templates');
                Backbone.history.start();
                
                $('#btn2').prop('disabled', true);
                $('#btn3').prop('disabled', true);
                $('#btn4').prop('disabled', true);
				$('#btn5').prop('disabled', true);
				
           };
           app.routeur.navigate('treasures', {trigger: true});
        },
        // Main function
        init: function() {
			
            // Load templates (async)
			
                $.ajax({
                    url: 'templates.html',
                    dataType: 'text'
                }).done(function(contents) {
                    $("#templates").append(contents);
					app.start();
                });
            
        },
		select: function(i){
			
			 for (var j=1; j<6; j++){
				var k=0;
				
				if (i==j){
					
					$('#btn'+j).removeClass('disable').addClass('active');
					$('#btn'+j).prop('disabled','false');
					if (k==0){k=1;}else {break;};
				} else {
					if ($('#btn'+j).prop('class','active')){
						$('#btn'+j).prop('disabled','true');
						$('#btn'+j).removeClass('active').addClass('disable');
						if (k==0){k=1;}else {break;};
					};
				};
			};
		}
		
    };

    if (window.cordova) {
        document.addEventListener("deviceready", app.init, false);
    } else {
       $(document).ready(app.init);
    };

    return app;
})(TreasureHunt);