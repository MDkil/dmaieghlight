var now ;
	var after = "background-fin";
	function backgroundAnimation () {
		setTimeout(function() {
			now = document.getElementById("cloud").className;
			document.getElementById("cloud").className = after;
			after = now;
			backgroundAnimation();
		}, 2000);
	}
	backgroundAnimation();
