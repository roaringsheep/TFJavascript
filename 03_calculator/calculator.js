function Calculator()
{
	this.num = 0; 
	this.value = function(){return this.num;};
	this.add = function(num)
	{
		this.num += num; 
	};
	this.subtract = function(num)
	{
		this.num -= num;
	};
}