App.Views.Login = Backbone.View.extend({
	className : "login",
	barModel : null,
	
	events : {
		"click a" : "onForgotPassword"
	},
	
	initialize : function(){
		_.bindAll(this, "render", "setup", "setupGuerrometro", "bootstrapGuerrometro", "onForgotPassword");
	
		this.$el.append(UT.Main.Login(this.options.model));
		this.setup();
	},
	
	render : function(){
		$(this.options.parent).append(this.$el);
	},
	
	onForgotPassword : function(e){
		e.preventDefault();
	},
	
	setup : function(){
		this.bootstrapGuerrometro();
	},
	
	bootstrapGuerrometro : function(){
		this.barModel = new App.Models.Guerrometro();
		
		this.barModel.bind("change", this.setupGuerrometro);
		this.barModel.startPolling();
	},
	
	setupGuerrometro : function(){
		var self = this;
		
		var els = {
			orc : find('orcBar'),
			human : find('humanBar'),
			shield : this.$el.find('.ir.shield') 
		}
		
		for(var i in els){
			if(els.hasOwnProperty(i) && typeof(this.barModel[i])=== 'function'){
				els[i].bar.css('width', this.barModel[i]());
				els[i].percent.html(this.barModel[i]());
			}
		}
		
		els.shield.css('left', els.orc.bar.css('width'));
		
		function find(id){
			var el = {
				bar : self.$el.find('#'+id),
				percent : self.$el.find('#'+id+' .guerrPercent')
			}
			
			return el;
		}
	}
	
	
});



