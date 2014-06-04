function repeat (str, num)
{ var string = "";
	for(var i =0; i<num; i++)
	{
		string = string + str;
	}
	return string;
}

function join (arr, del)
{
	if (typeof del !== "string")
	{
		del = "";
	}
	var str = "";
	for (var i =0; i<arr.length; i++)
	{
		if(i == arr.length-1)
		{
			str += arr[i];
		}
		else
		{
		str += arr[i] + del;
		}
	}
	return str;
}

function sum (arr)
{
	var sum = 0;
	for (var i=0; i<arr.length; i++)
	{
		sum += arr[i];
	}
	return sum;
}

function paramify (hash)
{
	var str = "";
	var i = 0;
	var j = 0;
	var abc = Object.keys(hash);
	var sabc = abc.sort();

	for (var index in hash)
	{
		i++;
	}

	for (j = 0; j < sabc.length; j++)
	{
		if (j < sabc.length-1)
		{
		str += sabc[j] + "=" + hash[sabc[j]] + "&";
		}
		else
		{
			str += sabc[j] + "=" + hash[sabc[j]];	
		}
	}
	return str;
}

function factorial (num)
{
	var factorial = 1;
	for(var i=1; i<=num; i++)
	{
		factorial = factorial * i;
	}
	return factorial;
}

function concat_string()
{
	var strarr = [];
	for (var i = 0; i<arguments.length; i++)
	{
		strarr.push(arguments[i]);
	}
	var result = "";
	for (var i = 0; i<strarr.length; i++)
	{
		result += strarr[i];
	}
	return result;
}