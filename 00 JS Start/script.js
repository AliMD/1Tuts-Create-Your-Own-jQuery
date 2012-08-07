/*-
var arr = new Array(6,8,9,3,8);

var arr2 = [6,8,9,3,8]



var obj = new Object();
obj.a=1;
obj.b=2;
obj.c=3;

var obj2 = {a:1,b:2,c:3};
*/


/*
function test(){
	alert(1);
}
test.call();


var test = function (){
	alert(1);
}
test.call();


var test = function (){
	alert(1);
}
test();


(test = function (){
	alert(1);
}).call();

(test = function (){
	alert(1);
})();


(function (){
	alert(1);
})();
*/

/*
test = function(){
	return 5;
}

var a=test(); // 5


double = function(n){
	return n*2;
}

var a=double(5); // 10
*/


/*
var a=5;
(function(){
	a=10;
})();
alert(a);


var a=5;
(function(){
	var a=10;
})();
alert(a);
*/

/*
whenLoad = function(){
	alert("Page Loaded");
}
window.onload=whenLoad;


window.onload=function(){
	alert("Page Loaded");
}
*/


/*
obj1={fname:'ali',lname:'md'}

alert(obj1.fname); // ali

obj2 = obj1; // copy byRef;

obj1.fname='gholi';

alert(obj2.fname); // gholi

obj2.lname = 'jz';

alert(obj1.lname) // jz

obj1.age=10;

alert(obj2.age); // 10

*/

/*
function person(fn,ln,age){
	this.fname = fn;
	this.lname = ln;
	this.age=age;
}

var obj1 = new person('ali','md',15);

var obj2 = new person('gholi','jz',10);

alert(obj1.fname); // ali
alert(obj2.fname); // gholi

*/

/*
function person(fn,ln,age){
	this.fname = fn;
	this.lname = ln;
	this.age=age;

	this.sayHello = function(){
		alert("Hello, i'm "+this.fname+" "+this.lname);
	}
}

var obj1 = new person('ali','md',15);

obj1.sayHello();
*/

/*
function person(fn,ln,age){
	this.fname = fn;
	this.lname = ln;
	this.age=age;

	this.sayHello = function(){
		alert("Hello, i'm "+this.fname+" "+this.lname);
	}
}

var obj1 = new person('ali','md',15);

obj1.from = 'mashad';

alert(obj1.from); // mashad
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

var box = new iQueryFn('box');
box.html('Changed Value');
box.append(' Appended Value');
box.prepend('Prepended Value ');

