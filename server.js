const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/register", (req, res) => {
    let students = [];

    if (fs.existsSync("students.json")) {
        const data = fs.readFileSync("students.json", "utf8");
        students = data ? JSON.parse(data) : [];
    }

    const newStudent = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.phone,
        branch: req.body.course,
        password: req.body.password
    };

    students.push(newStudent);

    fs.writeFileSync(
        "students.json",
        JSON.stringify(students, null, 2)
    );

    res.json({
        success: true,
        message: "Registration successful!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});