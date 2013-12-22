var background;

function commencerLApplication()
{
	if( !(verifPseudo() && verifNomPrenom('nom') && verifNomPrenom('prenom') && validerEmail('email') && validerDate() ) )
		return ;
	document.getElementById("persoPseudo").innerHTML = document.getElementById("pseudo").value;
	document.getElementById("persoEmail").innerHTML = document.getElementById("email").value;
	document.getElementById("persoNomEtPrenom").innerHTML = document.getElementById("nom").value + " " + document.getElementById("prenom").value;
	fermerAccueil();
	fermerNav();
	ouvrirApplication()
	pannelposition();
}
function ouvrirApplication()
{
	document.getElementById("application").style.display = "block";
	setTimeout(function() {
	document.getElementById("application").style.opacity = "1";
	}, 1000);
	document.getElementById("pannel").style.display = "block";
	document.getElementById("pannel").style.opacity = "1";
}
function pannelposition()
{
	var Pannelmousedown = false ;
	var downPos;
	var distance = {
		axeY : 0,
		axeX : 0
	};
	$("#titre").mousedown(function(e){
                      		  Pannelmousedown = true;
                      		  distance.axeY = Math.abs( $('#pannel').position().top - event.pageY );
                       		  distance.axeX = Math.abs( $('#pannel').position().left - event.pageX );
                 		 });
    $("#titre").mouseup(function(e){
                      		  Pannelmousedown = false;
                 		 });
   
    $(document).mousemove(function(e){
                  		    if(Pannelmousedown)
                  			{
                   			    document.getElementById('pannel').style.top = event.pageY - distance.axeY;
                  			    document.getElementById('pannel').style.left = event.pageX - distance.axeX;
                 			 }
						}); 
}

function changerValeur(id, valeur)
{
	document.getElementById(id).innerHTML = document.getElementById(valeur).value;
}

function changerSource(id, valeur)
{
	document.getElementById(id).src = document.getElementById(valeur).value;
}
function changerBackground()
{
	document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + document.getElementById("changerArriere").value + "')" ;
	background = document.getElementById("changerArriere").value ;	

}
function changerNavColor()
{
	document.getElementById("persoNav").style.backgroundColor = document.getElementById("changerNav").value;
}
function changerSlid(id)
{
	slideVar[id] = document.getElementById("changerSlid" + id).value;
}
function changerLateralImg()
{
	document.getElementById("persoAProposLateral").src = document.getElementById("changerLateral").value;
	document.getElementById("persoCompetencesLateral").src = document.getElementById("changerLateral").value;
	document.getElementById("persoContactLateral").src = document.getElementById("changerLateral").value;
}

function ajouterCompetence()
{
	document.getElementById("persoCompetences").innerHTML += ' <li>	<a> ' + document.getElementById("competence").value + ' : </a>	<div class="chargementtotalApplication">	<div class="surchargementApplication"> <div class="avancementApplication" style="width:' + document.getElementById("pourcentage").value + '%">	</div>	</div>	</div>	</li>' ;
}

function ajouterProjet()
{
	document.getElementById("persoProjets").innerHTML = '<li>	<img src="' +  document.getElementById("image").value + '">	<span class="informationsApplication">	<h4>' +  document.getElementById("projet").value + '</h4>	<p> ' +  document.getElementById("discription").value + '	</p>	</span>	<span class="scoreApplication" title="scoreApplication">	<a> ' +  document.getElementById("note").value + ' </a>	</span>   </li>' ;
}

function donnerCode()
{
	document.getElementById("cnom").style.display = "none";
	document.getElementById("cprenom").style.display = "none";
	document.getElementById("cemail").style.display = "none";
	document.getElementById("cbutton").innerHTML = "Voila votre code";
	document.getElementById("heretest").value = '<html> \n <head> \n <title>'+ document.getElementById("pseudo").value +'</title> \n <meta name="author" content="Dmaiegh.Tn"> \n <meta charset="UTF-8"> \n <link rel="stylesheet" href="http://localhost:82/dmaieghlight/css/siteperso.css"> <link rel="stylesheet" href="http://localhost:82/dmaieghlight/css/style.css"> \n <script src="http://localhost:82/dmaieghlight/js/siteperso.js"></script> <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"> \n </head> \n <body>' + document.getElementById("application").innerHTML + "</body> \n </html>";
	ouvrirGuide('contact');
}