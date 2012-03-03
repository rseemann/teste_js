App.Views.Login = Backbone.View.extend({
	className : "login",
	barModel : null,
	loginContent : null,
	currentContent : null,
	animationTime : 400,
	
	events : {
		"click .menuItem a" : "onMenuItemClicked"
	},
	
	initialize : function(){
		_.bindAll(this, "render", "setup", "setupGuerrometro", "bootstrapGuerrometro",
		 "onMenuItemClicked");
	
		this.$el.append(UT.Main.Login(this.options.model));
		this.setup();
	},
	
	setup : function(){
		this.bootstrapGuerrometro();
		
		this.loginContent = this.$el.find('#loginContentWrapper div');
	},
	
	render : function(){
		$(this.options.parent).append(this.$el);
		
		this.$el.find('.menuItem a[href="#jogo"]').click();
	},
	
	onMenuItemClicked : function(e){
		e.preventDefault();
		
		this.$el.find('.menuItem a').each(function(i, item){
			$(item).removeClass('active');
		});
		
		var $el = $(e.currentTarget);
		$el.addClass('active');
		this.setupContent($el.attr('href'));
	},
	
	bootstrapGuerrometro : function(){
		this.barModel = new App.Models.Guerrometro();
		
		this.barModel.bind("change", this.setupGuerrometro);
		this.barModel.startPolling();
	},
	
	setupContent : function(href){
		href = href.substring(1);
		
		var self = this;
		
		if(this.currentContent == href){
			return;
		}
		
		this.currentContent = href;
		
		this.loginContent.fadeOut(this.animationTime, function(){
			var el = $(this);
			
			el.css("background-image", "url("+Content.login[href].background+")")
			
			 self.loginContent.fadeIn(self.animationTime);
		})
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



