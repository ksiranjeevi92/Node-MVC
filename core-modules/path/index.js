const path = require("path");

const joinedPath = path.join("Users", "siranjeevi", "image.png");

console.log("joinedPath: " + joinedPath + "\n");

const base = path.basename("Users/siranjeevi/image.png");

console.log("basename ", base, "\n");

const parse = path.parse("/Users/siranjeevi.image.png");

console.log("Parse ", parse, "\n");
