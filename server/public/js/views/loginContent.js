App.Views.Login.Content = Backbone.View.extend({
	animationTime : 400,
	contentKey : null,
	content : null,
	
	
	initialize : function(){
		_.bindAll(this, "render");
		this.on('changeContent', this.onContentChanged);
		
		this.options.parent.append(this.$el);
		this.bootstrapContent();
	},
	
	bootstrapContent : function(){
		this.content = $('<div></div>');
		this.$el.append(this.content);
	},
	
	onContentChanged : function(href){
		href = href.substring(1);
		
		var self = this;
		
		if(this.contentKey == href){
			return;
		}
		
		this.contentKey = href;
		
		this.content.fadeOut(this.animationTime, function(){
			showNewContent();
		});
		
		function showNewContent(){
			self.content.html(UT.Main.Login.Content[self.contentKey]);
			self.content.fadeIn();
		}
		
		/*
		this.loginContent.fadeOut(this.animationTime, function(){
			var el = $(this);
			
			el.css("background-image", "url("+Content.login[href].background+")")
			
			self.loginContent.fadeIn(self.animationTime);
		})
		*/
	}
});


/*
 
 * 	setupContent : function(href){
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
 * */