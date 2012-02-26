UT = function(params){
	var ut = function(templateString){
		return _.template(templateString);
	};
	
	for(var i in params){
		this[i] = ut(params[i]);
	}
	
	return this;
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