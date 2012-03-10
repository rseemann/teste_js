App.Views.Login.Content.Midia = Backbone.View.extend({
	article : null,
	currentHref : null,
	id : 'midiaContent',
	images : {
		concept : [
			1,2,3,4,5,6,7,8
		],
		game : [
			1,2,3,4
		],
		fan : [
			'sword'
		]
	},
	
	events : {
		'click nav li' : 'onNavItemClicked'
		
	},
	
	initialize : function(){
		_.bindAll(this, 'setup', 'onNavItemClicked', 'handleNavClick');
		 
		this.setup();
	},
	
	setup : function(){
		this.$el.append(UT.Login.Content.Midia({}));
		
		this.article = this.$el.find('article');
	},
	
	onNavItemClicked : function(e){
		var href = this.handleNavClick(e),
			articleHTML;
		
		if(this.currentHref == href){
			return;
		}
		
		this.currentHref = href;
		
		switch(href){
			case 'concept':
			case 'game':
			case 'fan':
				articleHTML = this.showImgContent(href);
				break;
			case 'video':
				articleHTML = this.showVideoContent();
				break;
		}
		
		this.article.html(articleHTML);
	},
	
	showImgContent : function(type){
		var img = {
			list : this.images[type],
			listEl : $('<ul></ul>'),
			el : '<li><a href="<%=src%>" target="_blank"><img src="<%=src%>"></a></li>',
			data : {
				src : null
			},
		}
		
		for(var i in img.list){
			var src = '/images/'+type+'/'+img.list[i]+'.png';
			
			img.data.src = src;
			img.listEl.append(_.template(img.el, img.data)); 
		}
		
		console.log(img.listEl);
		
		return img.listEl;
	},
	
	showVideoContent : function(){
		var el = '<iframe width="100%" height="100%" src="http://www.youtube.com/embed/videoseries?list=FLaoDmeTonyjckmRzM2GPA5w&amp;hl=en_US" frameborder="0" allowfullscreen></iframe>'
		
		return el;
	},
	
	handleNavClick : function(e){
		e.preventDefault();
		
		var $el = $(e.currentTarget);
		
		$el.siblings().each(function(i, item){
			$(item).removeClass('active');
		})
		 
		$el.addClass('active');
		
		return $el.find('a').attr('href');
	}
});












