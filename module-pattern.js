var MODULE = (function (self) {
	console.log("Module function - start");

	var  privateVariable=1;

	function privateMethod(){

	}

	self.moduleVariable = 2;
	self.firstMethod = function(){
console.log("firstMethod");
	};

	return self;

}(MODULE || {}));



/* closures, prototyping */
function Myobject(name, message)
{
	this.name = name;
	this.message = message;
}

(function(){
this.getName = function (){
console.log("getname");
}

this.saveName = function(){
console.log("saveName");

}


}).call(Myobject.prototype);


var my = new Myobject("","");
my.getName();
my.saveName();