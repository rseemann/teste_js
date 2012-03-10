App.Views.Login.Content.Comunidade = Backbone.View.extend({
	id : 'comunidadeContent',
	
	initialize : function(){
		_.bindAll(this, 'setup');
		 
		this.setup();
	},
	
	setup : function(){
		this.$el.append(UT.Login.Content.Comunidade({}));
	}
});
