function Temperature (temp)
{
	var fah = temp;
	var cel = 0;
	this.fahrenheit = function ()
	{	
		return fah;
	};
	this.celcius = function ()
	{
		cel = f2c(fah);
		return cel;
	};
	this.setFahrenheit = function (temp)
	{
		fah = temp;
		cel = f2c(temp);
		return fah;
	};
	this.setCelcius = function (temp)
	{
		cel = temp;
		fah = c2f(temp);
		return cel;
	};

	this.f2c = function (fah) {return (fah - 32) * (5/9);};

	this.c2f = function (cel) {return cel * (9/5) + 32;};

}

function f2c (fah) {return (fah - 32) * (5/9);}

function c2f (cel) {return cel * (9/5) + 32;}