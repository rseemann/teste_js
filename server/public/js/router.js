AppRouter = Backbone.Router.extend({
	main : $('#main'),
	
	currentMainView : null,
	
	routes : {
		"" : "login",
		"char" : "charSelection"
	},
	
	login : function(){
		this.renderMainContent(App.Views.Login);
	},
	
	renderMainContent : function(view){
		var opt = {
			parent : this.main,
			model : {
				name : "Luana",
				classe : "Barbarian",
				gender : 'Female'
			}
		};
		
		this.currentMainView = new view(opt);
		this.currentMainView.render();
	}
});