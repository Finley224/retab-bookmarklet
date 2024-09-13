const { btoa } = require('node:buffer');
const fs = require('node:fs');

console.log("Loading files...");

// Load the mainfle
mainJs = fs.readFileSync('mainOffline.js', "utf8");

// Load the Title Protect script
titleProtect = fs.readFileSync('protecttitle.js', "utf8");

// Load the base
output = fs.readFileSync('offlineBase.js', "utf8");

console.log("Building bookmark...");


// Convert the title protect to base64
titleProtect = btoa(titleProtect)

// Replace the reference to titleProtect in mainjs to the titleProtect code
mainJs = mainJs.replace(/titleProtectBlankRep/g, titleProtect);

// Convert to Base 64
mainJs = btoa(mainJs)

// Replace the placeholder with the base64 encoded code
output = output.replace(/scriptBlankRep/g, mainJs);

console.log("Writing script to build...");

// Write the file to the build dir
fs.writeFileSync('build/offline.js', output)

console.log("Build success, all done!");
