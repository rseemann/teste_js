App.Models.Guerrometro = Backbone.Model.extend({
	url : '/guerrometro',
	pollingInterval : 1000,
	
	defaults : {
		orc : 50,
		human : 50
	},
	
	startPolling : function(){
		var self = this;
		
		setInterval(function(){
			self.fetch();
		}, this.pollingInterval);
	},
	
	orc : function(){
		return this.get('orc');
	},
	
	human : function(){
		return this.get('human');
	}
});
