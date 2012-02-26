App.Views.Login = Backbone.View.extend({
	className : "login",
	
	initialize : function(){
		_.bindAll(this, "render");
	
		this.$el.append(UT.Main.Login({name : "Luana"}));
		
	},
	
	render : function(){
		$(this.options.parent).append(this.$el);
	}
});