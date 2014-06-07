function countWords (string) 
{
	var arr = string.split(" ");
	var array = arr.length;
	return array;
}

function makeAdder (num)
{
	return function (anothernum)
	{
		return num + anothernum;
	}
}

function forEach (array, func) {
	for (var i=0; i<array.length; i++)
	{
		func(array[i]);
	}
}

function map (array, func) {
	var newarr = [];
	for (var i=0; i<array.length; i++)
	{
		newarr[i] = func(array[i]);
	}	
	return newarr;
}

function filter (array, filter) {
	var newarr = [];
	for (var i=0; i<array.length; i++)
	{
		if(filter(array[i])==true)
		{
			newarr.push(array[i]);
		}
	}
	return newarr;
}

function contains (hash, arg) 
{
	for (key in hash)
	{
		if (hash[key] == arg)
		{
			return true;
		}
	}
	return false;
}

function countWordsInReduce (wstring1, wstring2)
{
	var array1 = wstring1.split(" ");
	var array2 = wstring2.split(" ");
	return array1.length + array2.length;
}

function reduce (array, start, func)
{
	var realArray = array.slice(start);
	while(realArray.length > 1)
	{
	thing1 = realArray.pop();
	thing2 = realArray.pop();
	realArray.push(func(thing1,thing2));
	}
	return realArray[0];
}

function sum (numarray)
{
	return reduce(numarray, 0, function(a, b) {return a+b;});
}

function every (arr, func)
{	for (var j=0; j< arr.length; j++)
	{
		if (func(arr[j]) === false)
		{
			return false;
		}
	}
	return true;
}

function any (arr, func)
{	for (var j=0; j< arr.length; j++)
	{
		if (func == undefined)
		{
			if(arr[j] === true)
			{
				return true;
			}
		}
		else 
		{
			if (func(arr[j]) === true)
			{
				return true;
			}
		}
	}
	return false;
}

function once (func) 
{
	var call = false;
	return function (){
		if (!call)
		{
			call = true;
			return func();
		}
		return;
	}
}

function wrapper (fun, wrap)
{ 
	return function ()
	{
		return wrap (fun);
	};
}