/*
	Requires gamepadGetters.js to be loaded
*/

// Displays information on connected Gamepads in the HTML
function displayInfo() {

	var activeGPs = getActiveGPs()

	// Display a notice based on the number of connected Gamepads
	if (activeGPs.length == 0) {
		document.getElementById("top").innerHTML = 
		"<h1>No Gamepads Detected</h1><h3>If a Gamepad is connected," +
		" try pressing one of its buttons</h3>";
	}
	else if (activeGPs.length == 1){
		document.getElementById("top").innerHTML = 
		"<h1>1 Gamepad Detected</h1>";
	}
	else {
		document.getElementById("top").innerHTML = 
		"<h1>" + activeGPs.length + 
		" Gamepads Detected</h1>";
	}

	// Clear the GPs div
	document.getElementById("GPs").innerHTML = "";

	// Populate the GPs div with a gamepad div for each connected
	// gamepad, containing information about that gamepad
	activeGPs.forEach( function(g){
		var msgPart1 = "<div class='gamepad' id='gp" +
		String(g.index) +
		"'>" +
		"<h2>Gamepad " +
		String(g.index) +
		"</h2> <p class='info'><strong>ID:</strong> " +
		g.id +
		"<br><strong>" +
		String(g.buttons.length) +
		"</strong> buttons<br><strong>" +
		String(g.axes.length) +
		"</strong> axes<br><strong>Mapping: </strong>";

		if (g.mapping == "") {
			document.getElementById("GPs").innerHTML += msgPart1 +
			"None</p><div class='btnDiagram' id='bd" +
			String(g.index) +
			"'></div></div>";
		}
		else {
			document.getElementById("GPs").innerHTML += msgPart1 +
			String(g.mapping)+
			"</p><div class='btnDiagram' id='bd" +
			String(g.index) +
			"'></div></div>";;
		}

	});
}

function displayButtons() {
	var activeGPs = getActiveGPs()

	activeGPs.forEach( function(g) {
		var divID = "bd" + String(g.index);
		document.getElementById(divID).innerHTML = "";
		getActiveButtons(g).forEach( function(b){
			document.getElementById(divID).innerHTML += String(b);
		});
	});
	
}