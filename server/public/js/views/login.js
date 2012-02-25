App.Views.Login = Backbone.View.extend({
	className : "login",
	
	initialize : function(){
		_.bindAll(this, "render");
		
	},
	
	render : function(){
		$(this.options.parent).append(this.$el);
	}
});