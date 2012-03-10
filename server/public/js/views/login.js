App.Views.Login = Backbone.View.extend({
	className : "login",
	barModel : null,
	animationTime : 400,
	loginContent : null,
	currentContentKey : null,
	
	events : {
		"click .menuItem a" : "onMenuItemClicked"
	},
	
	initialize : function(){
		_.bindAll(this, "render", "setup", "setupGuerrometro", "bootstrapGuerrometro",
		"bootstrapLoginContent", "onMenuItemClicked");
	
		this.$el.append(UT.Main.Login(this.options.model));
		this.setup();
	},
	
	setup : function(){
		this.bootstrapGuerrometro();
		this.bootstrapLoginContent();
	},
	
	render : function(){
		$(this.options.parent).append(this.$el);
		this.$el.find('.menuItem a[href="#Jogo"]').click();
	},
	
	onMenuItemClicked : function(e){
		e.preventDefault();
		
		var $cItem = $(e.currentTarget),
			href = $cItem.attr('href').substring(1),
			self = this;
			
		if(this.currentContentKey == href){
			return;
		}
		
		this.currentContentKey = href;
		
		this.$el.find('.menuItem a').each(function(i, item){
			$(item).removeClass('active');
		});
		
		$cItem.addClass('active');
		
		this.loginContent.fadeOut(this.animationTime, function(){
			showNewContent()
		});
		
		function showNewContent(){
			self.loginContent.html(new App.Views.Login.Content[href]().$el);
			self.loginContent.fadeIn(self.animationTime);
			
		}
	},
	
	bootstrapGuerrometro : function(){
		this.barModel = new App.Models.Guerrometro();
		
		this.barModel.bind("change", this.setupGuerrometro);
		this.barModel.startPolling();
	},
	
	bootstrapLoginContent : function(){
		this.loginContent = $('<body></body>');
		this.$el.find('#loginContentWrapper').append(this.loginContent);
	},
	
	setupGuerrometro : function(){
		var self = this,
			maxWidth = 435,
			orcBar = this.$el.find('#orcBar'),
			indicator = this.$el.find('#guerrIndicator');
		
		orcBar.css('width', maxWidth*(this.barModel.orc()/100));
		indicator.css('left', orcBar.css('width'));
		indicator.find('#leftPercent').html(this.barModel.orc()+'%');
		indicator.find('#rightPercent').html(this.barModel.human()+'%');
	}
});

App.Views.Login.Content = {};

