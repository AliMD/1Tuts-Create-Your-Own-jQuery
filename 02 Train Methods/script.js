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

$ = iQuery;
// test ..

$('box').html('Changed Value');
$('box').append(' Appended Value');
$('box').prepend('Prepended Value ');
*/



iQuery = function(id){

	var iQueryFn = function (id){
		this.elm = document.getElementById(id);

		this.html = function(str){
			this.elm.innerHTML = str;
			return this;
		}

		this.append = function(str){
			this.html(this.elm.innerHTML+str);
			return this;
		}

		this.prepend = function(str){
			this.html(str+this.elm.innerHTML);
			return this;
		}
	}

	return new iQueryFn(id);
}

$ = iQuery;

// test ..

$('box').html('Changed Value').append(' Appended Value').prepend('Prepended Value ');
