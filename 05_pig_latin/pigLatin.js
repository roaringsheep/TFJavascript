function piglatin (word) {
	var first = word.charAt(0);
	if(first == 'a' || first == 'e' || first == 'i' || first == 'o' || first == 'u')
		{
			word = word +'ay';
			return word;
		}
	else 
	{
		if(word.charAt(0) == 'q' && word.charAt(1) == 'u')
		{
			nword = word.substr(2) + word.charAt(0) + word.charAt(1);
		}
		else if(word.charAt(0) == 's' && word.charAt(1) == 'c' && word.charAt(2) == 'h')
		{
			nword = word.substr(3) + word.charAt(0) + word.charAt(1) + word.charAt(2);
		}
		else
		{
			nword = word.substr(1) + word.charAt(0);
		}
		return translate(nword);
	}
}

function translate (pig)
{
	var latin = pig.split(" ");
	var puglatin = "";
	for (var i=0; i<latin.length; i++)
	{
		latin[i] = piglatin(latin[i]);
		puglatin += latin[i] + " ";
	}
	puglatin = puglatin.trim();
	return puglatin;
}
