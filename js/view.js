
var TreasureHunt = (function(app) {
    "use strict";

    app.Views.Navigation = Backbone.View.extend({
        manage: true,
        el: false,
        
        events: {
            'click #btn1' : 'takePicture',
            'click #btn2' : 'lookPicturesTaken',
            'click #btn3' : 'lookPicturesHunt',
            'click #btn4' : 'comparePictures',
			'click #btn5' : 'sendPictures'
        },

        initialize : function(/* options */) {
			this.template = _.template($('#navigate-template').html());
			Backbone.View.prototype.initialize.apply(this, arguments);
			
		},
		
		render : function(){
			 var template = _.template( $("#navigate-template").html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
		  
		},
		
        takePicture: function() {
            app.routeur.navigate('snap', {trigger: true});
        },
        lookPicturesTaken: function() {
            app.routeur.navigate('mytreasures', {trigger: true});
        },
        lookPicturesHunt: function() {
            app.routeur.navigate('treasures', {trigger: true});
        },
        comparePictures: function() {
            app.routeur.navigate('compare', {trigger: true});
        },
		sendPictures: function() {
            app.routeur.navigate('send', {trigger: true});
        }
        
    });
	
	app.Views.snap = Backbone.View.extend({
		
		
		initialize : function() {
		
			this.render();
			
			
		},
		render: function(){
            var template = _.template($('#snap').html(),{} );
			this.$el.html(template);
			
        }
	
	});
	
	app.Views.MyTreasures = Backbone.View.extend({
		manage: true,
        el: false,
        
        events: {
            
            'click #delete-btn' : 'deletePhoto'
        },

        initialize : function() {
			this.template = _.template($('#swiper-photos').html());
			
			_.bindAll(this,'render');
			this.collection.bind('change', this.render);
			this.collection.bind('add', this.render);
			this.collection.bind('remove', this.render);
		},
		
		render : function(){
			var renderedContent = this.template({ photos : this.collection.toJSON() });
			$(this.el).html(renderedContent);
			return this;
		},
		
        removePhotoInGallery: function($el) {
            
        },
        deletePhoto: function() {
			var photosrc=$('.swiper-slide-visible img').attr("src");
			var photo=app.collections.mytreasures.get(photosrc);
			if  (confirm('êtes-vous sûr de vouloir effacer ce trésor ?')) {app.collections.mytreasures.remove(photo);};
        }
	});
	
	
		
	
	app.Views.Treasures = Backbone.View.extend({
		
		
		initialize : function() {
		
			this.render();
			
			
		},
		render: function(){
            var template = _.template($('#swiper-treasures').html(),{} );
			this.$el.html(template);
			
        }
	
	});
	
	app.Views.Compare = Backbone.View.extend({
		manage: true,
        el: false,
        
        events: {
           'click #delete-btn' : 'deletePhoto'
        },

        initialize : function() {
			this.template = _.template($('#compare').html());
			
			_.bindAll(this,'render');
			this.collection.bind('change', this.render);
			this.collection.bind('add', this.render);
			this.collection.bind('remove', this.render);
		},
		
		render : function(){
			var renderedContent = this.template({ photos : this.collection.toJSON()});
			$(this.el).html(renderedContent);
			return this;
		},
		
        removePhotoInGallery: function() {
            
        },
        deletePhoto: function() {
			var photosrc=$('#swiper-photos .swiper-slide-visible img').attr("src");
			var photo=app.collections.mytreasures.get(photosrc);
			if  (confirm('êtes-vous sûr de vouloir effacer ce trésor ?')) {app.collections.mytreasures.remove(photo);};
        }
	});
	

    return app;
})(TreasureHunt);