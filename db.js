// db.js
let colorDB = {
	users: [],
	hex: "#000000",
	rgb: "rgb(0,0,0)",
	hsl: "hsl(0 0% 0%)",
};

export function addColor(color) {
	// colorDB.users.push(user);
	colorDB.hex = color;
}

export function getColor() {
	return colorDB.hex;
}

// Export the functions to use in app.js
// module.exports = { addUser, getUsers };
