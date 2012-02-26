App.Views.Login = Backbone.View.extend({
	className : "login",
	
	events : {
		"click a" : "onForgotPassword"
	},
	
	initialize : function(){
		_.bindAll(this, "render", "onForgotPassword");
	
		this.$el.append(UT.Main.Login(this.options.model));
	},
	
	render : function(){
		$(this.options.parent).append(this.$el);
	},
	
	onForgotPassword : function(e){
		e.preventDefault();
		
	}
});