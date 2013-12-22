function verifPseudo()
{
	var pseudo = document.getElementById("pseudo").value;
	
	if(pseudo.length < 1 || pseudo.length > 10)
	{
		rouge("pseudo");
		return false;
	}
	for(var i = 0; i < pseudo.length ;  i++)
	{
		if( ! ( (pseudo[i] >= 'a' && pseudo[i] <= 'z') || (pseudo[i] >= 'A' && pseudo[i] <= 'Z') ) )
			{
				rouge("pseudo");
				return false;
			}
	}
	vert("pseudo");
	return true;
}



function verifNomPrenom(id)
{
	var aVerifier = document.getElementById(id).value;
	
	if(aVerifier.length < 1 || aVerifier.length > 15)
	{
		rouge(id);
		return false;
	}
	for(var i = 0; i < aVerifier.length ;  i++)
	{
		if( ! ( (aVerifier[i] >= 'a' && aVerifier[i] <= 'z') || (aVerifier[i] >= 'A' && aVerifier[i] <= 'Z') || aVerifier[i] == ' ' ) )
			{
				rouge(id);
				return false;
			}
	}
	vert(id);
	return true;
}

function validerDate()
{
	var date = document.getElementById("date").value.split('-');
	if(date[0] > 2003)
	{
		rouge("date");
		return false;
	}
	vert("date");
	return true;
}

function validerEmail(id) { 
	var x = document.getElementById(id).value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
 	 {
 		 rouge(id);
 		 return false;
 	 }
 	 vert(id);
 	 return true;
} 


function rouge(id)
{
	document.getElementById(id).style.border = "2px solid " + "#E74C3C"
}
function vert(id)
{
	document.getElementById(id).style.border = "2px solid " + "#2ECC71"
}