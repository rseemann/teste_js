App.Views.Login.Content.Midia = Backbone.View.extend({
	id : 'midiaContent',
	
	initialize : function(){
		_.bindAll(this, 'setup');
		 
		this.setup();
	},
	
	setup : function(){
		this.$el.append(UT.Login.Content.Midia({}));
	}
});
