App.Views.Login.Content.Mercado = Backbone.View.extend({
	id : 'mercadoContent',
	
	initialize : function(){
		_.bindAll(this, 'setup');
		
		this.setup();
	},
	
	setup : function(){
		this.$el.append(UT.Login.Content.Mercado({}));
	}
});
