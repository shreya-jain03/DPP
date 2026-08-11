// const fs=require('fs');
// const student = JSON.parse(
//     fs.readFileSync("student.json", "utf8")
// );
// let passed= true;
// console.log("Registration testing");
// //TC-01 check html file exist
// if(fs.existsSync("index.html")){
//     console.log("index.html file exists");}
// else{
//     console.log("index.html file does not exist");
//     passed=false;

// }
// //TC-02 check style file exist
// if(fs.existsSync("index.css")){
//     console.log("index.css file exists");}
// else{
//     console.log("index.css file does not exist");
//     passed=false;

// }

// //TC-03 check script file exist
// if(fs.existsSync("index.js")){
//     console.log("index.js file exists");}
// else{
//     console.log("index.js file does not exist");
//     passed=false;

// }

// //TC-04 check student file exist
// if(fs.existsSync("student.json")){
//     console.log("student.json file exists");}
// else{
//     console.log("student.json file does not exist");
//     passed=false;

// }
// //TC_05 name validation
// if(student.name.trim()!== "" ){
//     console.log(" Name Validation pass");
// }
// else{
//     console.log("Name Validation fail");
//     passed=false;
// }

// //TC-06Email validation 
// if(student.email.includes("@") ){
//     console.log(" Email Validation pass");
// }
// else{
//     console.log("Email Validation fail");
//     passed=false;
// }

// //TC=07 mobile validation
// if(student.mobile.length=== 10 ){
//     console.log(" Mobile Validation pass");
// }
// else{
//     console.log("Mobile Validation fail");
//     passed=false;
// }

// // TC-Branch validation
// if(student.branch.trim()!== "" ){
//     console.log(" Branch Validation pass");
// }
// else{
//     console.log("Branch Validation fail");
//     passed=false;
// }


// //TC=09 Password validation 
// if(student.password.length>=6 ){
//     console.log(" Password Validation pass");
// }
// else{
//     console.log("Password Validation fail");
//     passed=false;
// }

// //Tc=10 Registration success
// if(passed){
//     console.log(" Registration success");
// }
// else{
//     console.log("Registration failed");
//     //process.exit();
    
// }
const fs = require('fs');

let passed = true;
console.log('Registration testing');

const requiredFiles = ['index.html', 'style.css', 'script.js', 'student.json'];

requiredFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`${file} file exists`);
  } else {
    console.log(`${file} file does not exist`);
    passed = false;
  }
});

let data = null;

try {
  data = JSON.parse(fs.readFileSync('student.json', 'utf8'));
} catch (error) {
  console.log('student.json is invalid JSON');
  passed = false;
}

if (data && Array.isArray(data.students) && data.students.length > 0) {
  data.students.forEach((student) => {
    if (student.name && student.name.trim() !== '' && /^[A-Za-z\s]+$/.test(student.name.trim())) {
      console.log('Name Validation pass');
    } else {
      console.log('Name Validation fail');
      passed = false;
    }

    if (student.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      console.log('Email Validation pass');
    } else {
      console.log('Email Validation fail');
      passed = false;
    }

    if (student.mobile && student.mobile.toString().length === 10) {
      console.log('Mobile Validation pass');
    } else {
      console.log('Mobile Validation fail');
      passed = false;
    }

    if (student.branch && student.branch.trim() !== '') {
      console.log('Branch Validation pass');
    } else {
      console.log('Branch Validation fail');
      passed = false;
    }

    if (student.password && student.password.length >= 6) {
      console.log('Password Validation pass');
    } else {
      console.log('Password Validation fail');
      passed = false;
    }
  });
} else {
  console.log('No student data found in student.json');
  passed = false;
}

if (passed) {
  console.log('Registration success');
} else {
  console.log('Registration failed');
  process.exitCode = 1;
}


