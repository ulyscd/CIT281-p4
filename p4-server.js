/* 
CIT 281 Project 4 Server
Ulys Chauncey Drumrongthai
*/

const express = require("express");

const { 
    getQuestions, 
    getAnswers, 
    getQuestionsAnswers, 
    getQuestion, 
    getAnswer, 
    getQuestionAnswer 
} = require("./p4-module.js");

const app = express();
const port = 3000;

app.get("/question", (req, res) => {
    const questions = getQuestions();
    res.json({
        error: "",
        statusCode: 200,
        questions,
    });
});

app.get("/answer", (req, res) => {
    const answers = getAnswers();
    res.json({
        error: "",
        statusCode: 200,
        answers,
    });
});

app.get("/questionanswer", (req, res) => {
    const questions_answers = getQuestionsAnswers();
    res.json({
        error: "",
        statusCode: 200,
        questions_answers,
    });
});

app.get("/question/:number", (req, res) => {
    const number = req.params.number;
    const result = getQuestion(number);
    res.json({
        error: result.error,
        statusCode: result.error ? 400 : 200,
        question: result.question,
        number: result.number,
    });
});

app.get("/answer/:number", (req, res) => {
    const number = req.params.number;
    const result = getAnswer(number);
    res.json({
        error: result.error,
        statusCode: result.error ? 400 : 200,
        answer: result.answer,
        number: result.number,
    });
});

app.get("/questionanswer/:number", (req, res) => {
    const number = req.params.number;
    const result = getQuestionAnswer(number);
    res.json({
        error: result.error,
        statusCode: result.error ? 400 : 200,
        question: result.question,
        answer: result.answer,
        number: result.number,
    });
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});