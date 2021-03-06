// Returns an array with the numbers of the active buttons as they are
// displayed on the gamepad (i.e. indexed at 1)
function getActiveButtons(gamepad) {
	var active = [];
	for (i = 0; i < gamepad.buttons.length; i++) {
		if (gamepad.buttons[i].pressed) {
			active.push(i+1);
		}
	}
	return active;
}

// Returns an array of boolean values indicating whether each button is
// pressed or not
function getButtonStatuses(gamepad) {
	var btnStatuses = [];
	gamepad.buttons.forEach( function(b) {
		btnStatuses.push(b.pressed)
	});
	return btnStatuses;
}

// Returns an array with the values of the gamepad's axes (-1 to 1)
function getAxisStatuses(gamepad) {
	return gamepad.axes;
}

// Prints strings to the console with more easily human-readable
// information regarding which buttons are pressed and which aren't
function displayButtonStatuses(gamepad) {
	var i = 0;
	getButtonStatuses(gamepad).forEach( function(s) {
		if (s) {
			console.log("Button " + String(i+1) + " pressed.");
		}
		else {
			console.log("Button " + String(i+1) + " not pressed.");
		}
		i++;
	});
}

// Determine which Gamepads are connected, if any
		function getActiveGPs() {
			var activeGPs = [];
			navigator.getGamepads().forEach(function(g){
				if (g.connected) {
					activeGPs.push(g);
				}
			});
			return activeGPs;
		}