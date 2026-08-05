const fs = require("fs");

let passed = "true";

console.log("registration test started");

if (fs.existsSync("index.html")) {
    console.log("TC-01: index.html file exists - passed");
}
else {
    console.log("TC-01: index.html file does not exist - failed");
    passed = "false";
}

console.log("Test Result: " + passed);