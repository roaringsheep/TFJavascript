function Calculator (){
	this.newm = [];
	this.push = function (num)
	{
		this.newm.push(num);
	};
	this.value = function () {
		return this.newm[this.newm.length -1];
	};
	this.plus = function (){
		if(this.newm.length>1)
		{
		num2 = this.newm.pop();
		num1 = this.newm.pop();
		this.newm.push(num1 + num2);
		}
		else
		{
			throw "calculator is empty";
		}

	};
	this.minus = function (){
		if(this.newm.length>1)
		{
		num2 = this.newm.pop();
		num1 = this.newm.pop();
		this.newm.push(num1 - num2);
		}
		else
		{
			throw "calculator is empty";
		}
	};
	this.times = function (){
		if(this.newm.length>1)
		{
		num2 = this.newm.pop();
		num1 = this.newm.pop();
		this.newm.push(num1 * num2);
		}
		else
		{
			throw "calculator is empty";
		}
	};
	this.divide = function (){
		if(this.newm.length>1)
		{
		num2 = this.newm.pop();
		num1 = this.newm.pop();
		this.newm.push(num1 / num2);
		}
		else
		{
			throw "calculator is empty";
		}
	};
}