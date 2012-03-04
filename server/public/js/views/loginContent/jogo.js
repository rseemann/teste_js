App.Views.Login.Content.Jogo = Backbone.View.extend({
	className : '',
	
	initialize : function(){
		_.bindAll(this, 'setup');
		
		this.setup();
	},
	
	setup : function(){
		this.$el.append(UT.Login.Content.Jogo({}));
	}
});
