function Mammal (name) {
	this.name = name;
	this.offspring = [];
	this.sayHello = function () {
		return "My name is " + this.name + ", I'm a Mammal"
	}
	this.haveBaby = function () {
		var child = new Mammal ("Baby " + this.name);
		this.offspring.push (child);
		return child;
	}
}
Cat.prototype = new Mammal ();
function Cat (name, color){
	this.name = name;
	this.color = color;
	this.offspring = [];
	this.haveBaby = function (color) {
		var name = "Baby " + this.name	
		var kitty = new Cat (name, color);
		this.offspring.push(kitty);
		return kitty;
	}
}