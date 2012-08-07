/*

iQueryFn = function (id){
	this.elm = document.getElementById(id);

	this.html = function(str){
		this.elm.innerHTML = str;
	}

	this.append = function(str){
		this.html(this.elm.innerHTML+str);
	}

	this.prepend = function(str){
		this.html(str+this.elm.innerHTML);
	}
}

iQuery = function(id){
	return new iQueryFn(id);
}

// test ..

var box = iQuery('box');
box.html('Changed Value');
box.append(' Appended Value');
box.prepend('Prepended Value ');

*/


iQueryFn = function (id){
	this.elm = document.getElementById(id);

	this.html = function(str){
		this.elm.innerHTML = str;
	}

	this.append = function(str){
		this.html(this.elm.innerHTML+str);
	}

	this.prepend = function(str){
		this.html(str+this.elm.innerHTML);
	}
}

iQuery = function(id){
	return new iQueryFn(id);
}

$ = iQuery;
// test ..

var box = $('box');
box.html('Changed Value');
box.append(' Appended Value');
box.prepend('Prepended Value ');
