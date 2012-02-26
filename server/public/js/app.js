window.App = {
	Views : {},
	Controllers : {},
	init : function(){
		new AppRouter();
		Backbone.history.start();
	}
};