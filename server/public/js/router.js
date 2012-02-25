AppRouter = Backbone.Router.extend({
	main : $('#main'),

	routes : {
		"" : "login",
		"char" : "charSelection"
	},
	
	login : function(){
		var opt = {};
		
		this.renderMainContent(new App.Views.Login(opt));
	},
	
	renderMainContent : function(view){
		main.html(view.el);
		//view.render();
	}
	
	
});