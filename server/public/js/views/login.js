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
		var raceBars = {
			orc : this.$el.find('#orcBar'),
			human : this.$el.find('#humanBar'),
			shield : this.$el.find('#barShield')
		}
		
		raceBars.orc.css('width', this.barModel.orc());
		raceBars.human.css('width', this.barModel.human());
		raceBars.shield.css('width', raceBars.orc.css('width'));
	}
	
	
});



