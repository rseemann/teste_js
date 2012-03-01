UT = function(params){
	var ut = function(templateString){
		return _.template(templateString);
	};
	
	for(var i in params){
		this[i] = ut(getTemplate(params[i]));
	}
	
	return this;
}

var getTemplate = function(url){
	var path = "js/templates/"+url+".ut";
	var html;
	
	$.ajax({
		url : path,
		async : false,
		success : function(data){
			html = data;
		}
	});
	
	return html;
}

/*
 * 


UT.prototype = function(){
	
}
 
 
UT = function(){
	this.extend = function(){
		console.log(this);
	}
}

/*
UT = {
	extend : function(params){
		return _.extend(_.clone(this), params);
	},
	
}
*/