AppRouter = Backbone.Router.extend({
	main : $('#main'),

	routes : {
		"" : "login",
		"char" : "charSelection"
	},
	
	login : function(){
		var opt = {
			parent : main,
			model : {}
		};
		
		this.renderMainContent(new App.Views.Login(opt));
	},
	
	renderMainContent : function(view){
		view.render();
		//view.render();
	}
	
	
});