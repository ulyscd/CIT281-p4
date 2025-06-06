/*
CIT 281 Spring 2025 Lab 5
Ulys Chauncey Drumrongthai
*/

const express = require("express");
const app = express();

const HOST = "localhost"
const PORT = 3000;

app.use(express.json());

const students = [
    {
        id: 1,
        last: "Banks",
        first: "Aidan",
    },
    {
        id: 2,
        last: "Sanford",
        first: "Sophie",
    },
    {
        id: 3,
        last: "Ken",
        first: "Corey",
    }
];

app.get('/cit/student', (req, res) => {
    res.status(200).json(students);
});

app.get('/cit/student/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    
    for (const student of students) {
        if (student.id === studentId) {
            return res.status(200).json(student);
        }
    }
    res.status(404).send("Not Found")
});

app.post('/cit/student', (req, res) => {
    const { last, first } = req.body;

    if (!last || !first) {
        return res.status(400).send("Bad Request: Missing 'last' or 'first' property")
    }

    // -> New ID = max current ID + 1
    const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;

    // -> Creates a new student.
    const newStudent = { id: newId, last, first };

    // -> Adds the newly created student to the array.
    students.push(newStudent);

    // -> Returns the new student object.
    res.status(201).json(newStudent);

})

// Handles 404 for all other un-determined routes.
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});