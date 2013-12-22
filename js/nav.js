var fermerActuel = fermerAccueil;
var ouvert;
var	cadreActuel;
function ouvrirAccueil()
{
	fermerActuel();
	setTimeout(function() {
		document.getElementById("accueil").style.display = "block";
		document.getElementById("accueil").style.opacity = "1";
	}, 1000);
	
	fermerActuel = fermerAccueil;
}
function fermerAccueil()
{
	document.getElementById("accueil").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("accueil").style.display = "none";
	}, 1000);
}

function ouvrirAPropos(informationCadre)
{
	fermerActuel();
	setTimeout(function() {
		document.getElementById(informationCadre).style.top = "0%";
	}, 1000);
	fermerActuel = fermerAPropos;
	ouvert = informationCadre;
}
function fermerAPropos()
{
	document.getElementById(ouvert).style.top = "100%";
}
function ouvrirGuide(cadre)
{
	document.getElementById("cadreGuideBlack").style.display = "block" ;
	document.getElementById(cadre).style.display = "block" ;
	cadreActuel = cadre;
}
function fermerGuide()
{
	document.getElementById("cadreGuideBlack").style.display = "none" ;
	document.getElementById(cadreActuel).style.display = "none" ;
}

function fermerNav()
{
	document.getElementById("navAccueil").style.opacity = "0";
	setTimeout(function() {
		document.getElementById("navAccueil").style.display = "none";
	}, 1000);
}