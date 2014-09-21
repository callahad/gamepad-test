// Returns an object which mimics the Gamepad object's buttons and axes
// arrays in order to create a deep copy of these attributes from the
// Gamepad object passed to it
function saveGP(gamepad) {
	var GamepadState = {
		buttons : [],
		axes : []
	};

	gamepad.buttons.forEach( function(b) {
		var GamepadButton = {
			pressed : b.pressed,
			value : b.value
		};
		GamepadState.buttons.push(
			GamepadButton
		);
	});

	gamepad.axes.forEach( function(a) {
		GamepadState.axes.push(a);
	});

	return GamepadState;
}