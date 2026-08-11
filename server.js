// const express = require("express");
// const fs = require("fs");

// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/shreya.html");
// });

// app.post("/register", (req, res) => {
//     let students = [];

//     if (fs.existsSync("students.json")) {
//         const data = fs.readFileSync("students.json", "utf8");
//         students = data ? JSON.parse(data) : [];
//     }

//     const newStudent = {
//         name: req.body.name,
//         email: req.body.email,
//         mobile: req.body.phone,
//         branch: req.body.course,
//         password: req.body.password
//     };

//     students.push(newStudent);

//     fs.writeFileSync(
//         "students.json",
//         JSON.stringify(students, null, 2)
//     );

//     res.json({
//         success: true,
//         message: "Registration successful!"
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const filePath = path.join(__dirname, "student.json");

app.get("/students", (req, res) => {

    if (!fs.existsSync(filePath)) {

        fs.writeFileSync(filePath, JSON.stringify({ students: [] }, null, 2));

    }

    const data = JSON.parse(fs.readFileSync(filePath));

    res.json(data);

});

app.post("/register", (req, res) => {

    let data = { students: [] };

    if (fs.existsSync(filePath)) {

        data = JSON.parse(fs.readFileSync(filePath));

    }

    data.students.push(req.body);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.json({

        message: "Registration Successful"

    });

});

app.listen(3000, () => {

    console.log("Server Running : http://localhost:3000");

});