var actuel = "accueilApplication";
var i = 0;
var slideVar = ["http://mdakil.me/dmaiegh/medias/images/slide/0.jpg", "http://mdakil.me/dmaiegh/medias/images/slide/1.jpg", "http://mdakil.me/dmaiegh/medias/images/slide/2.jpg"];
misAJourSlide();

function misAJourSlide()
{	
	setTimeout(function() {
		document.getElementById("persoSlider").style.backgroundImage= 'url("'+ slideVar[i] +'")';
		if(i < 2)
			i++;
		else 
			i=0;
		misAJourSlide();
	}, 5000);
}

function chargerAccueil()
{
	document.getElementById(actuel).className = "cadreApplication " + actuel + " invisibleApplication" ;
	document.getElementById("accueilApplication").className = "cadreApplication accueilApplication visibleApplication" ;
	actuel = "accueilApplication";
}

function chargerApropos()
{
	document.getElementById(actuel).className = "cadreApplication " + actuel + " invisibleApplication" ;
	document.getElementById("aproposApplication").className = "cadreApplication aproposApplication visibleApplication" ;
	actuel = "aproposApplication" ;
}

function chargerCompetences()
{
	document.getElementById(actuel).className = "cadreApplication " + actuel + " invisibleApplication" ;
	document.getElementById("competencesApplication").className = "cadreApplication competencesApplication visibleApplication" ;
	actuel = "competencesApplication" ;
}

function chargerProjets()
{
	document.getElementById(actuel).className = "cadreApplication " + actuel + " invisibleApplication" ;
	document.getElementById("projetsApplication").className = "cadreApplication projetsApplication visibleApplication" ;
	actuel = "projetsApplication" ;
}

function chargerContact()
{
	document.getElementById(actuel).className = "cadreApplication " + actuel + " invisibleApplication" ;
	document.getElementById("contactiniApplication").className = "cadreApplication contactiniApplication visibleApplication" ;
	actuel = "contactiniApplication" ;
}