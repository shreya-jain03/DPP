const fs = require("fs");
let passed = true;
console.log("Registration Test\n")

if(fs.existsSync("index.html")) {
   console.log("TC-01 : index.html exists:PASS");
}
else{
        console.log("TC-01 : index.html exists:FAIL");
        passed=false;
     }
if(fs.existsSync("css/style.css")) {
        console.log("TC-02 :style.css exists:PASS");
     }
else{
    console.log("TC-02 : style.css exists:FAIL");
    passed=false;
}
if(fs.existsSync("script.js")) {
    console.log("TC-03 :script.jss exists:PASS");
 }
else{
console.log("TC-03 : script.js exists:FAIL");
passed=false;
}
if(fs.existsSync("data/students.json")) {
    console.log("TC-4 : students.json exists:PASS");
 }
else{
console.log("TC-04 : students.json exists:FAIL");
passed=false;
}
const students = JSON.parse(
    fs.readFileSync("data/students.json")
);
const student=student[0];
