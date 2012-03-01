window.App = {
	Views : {},
	Models : {},
	Listener : new Listener(),
	init : function(){
		new AppRouter();
		Backbone.history.start();
	}
};