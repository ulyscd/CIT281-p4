/*
CIT 281 Project 4 Modules
Ulys Chauncey Drumrongthai
*/

const { data } = require("./p4-data.js");

/* ------------------------------- Functions: ------------------------------- */
const getQuestions = () => data.map((item) => item.question);
    // ^ Returns an array of strings where each array element is a question.

const getAnswers = () => data.map((item) => item.answer);
    // ^ Returns an array of strings where each array element is an answer.

function getQuestionsAnswers() {
    // Returns a copy of the original data array of objects.
    // -> Extra Credit: See 'Cloning an Array of Objects in JavaScript to avoid making a mutable copy.
    
    return data.map(item => ({ ...item }));
    // ^ Comments at the bottom of that site said none of those methods created a deep copy.
    // ^ So I asked perplexity how to create a deep copy and this is what I found.
};

function getQuestion(number = "") {
    // Returns an object with the following:
    //  -> question property (string) - the question from the data.
    //  -> number property (integer) - the question number, not array index value.
    //  -> error message property (string) - any error that occurred while getting the question.

    const questionNumber = parseInt(number, 10);

    if (isNaN(questionNumber) || !Number.isInteger(questionNumber)) {
        return {
            error: "Question number must be an integer",
            question: "",
            number: "",
        };
    }

    if (questionNumber < 1) {
        return {
            error: "Question number must be >= 1",
            question: "",
            number: "",
        };
    }

    if (questionNumber > data.length) {
        return {
            error: `Question number must be less than the number of questions (${data.length})`,
            question: "",
            number: "",
        };
    }

    const questionData = data[questionNumber - 1];

    return {
        error: "",
        question: questionData.question,
        number: questionNumber,
    };
}

function getAnswer(number = "") {
    // Returns an object with the following:
    //  -> answer property (string) - the answer from the data.
    //  -> number property (integer) - the question number, not array index value.
    //  -> error message property (string) - any error that occured while getting the question.

    const questionNumber = parseInt(number, 10);

    if (isNaN(questionNumber) || !Number.isInteger(questionNumber)) {
        return {
            error: "Answer number must be an integer",
            answer: "",
            number: "",
        };
    }

    if (questionNumber < 1) {
        return {
            error: "Answer number must be >= 1",
            answer: "",
            number: "",
        };
    }

    if (questionNumber > data.length) {
        return {
            error: `Answer number must be less than the number of questions (${data.length})`,
            answer: "",
            number: "",
        };
    }

    const questionData = data[questionNumber - 1];

    return {
        error: "",
        answer: questionData.answer,
        number: questionNumber,
    };
}

function getQuestionAnswer(number = "") {
    // Returns an object with the following:
    //  -> question property (string) - the question from the data.
    //  -> answer property (string) - the answer from the data.
    //  -> number property (integer) - the question number, not array index value.
    //  -> error message property (string) - any error that occurred while getting the question.

    const questionNumber = parseInt(number, 10);

    if (isNaN(questionNumber) || !Number.isInteger(questionNumber)) {
        return {
            error: "Question number must be an integer",
            question: "",
            number: "",
        };
    }

    if (questionNumber < 1) {
        return {
            error: "Question number must be >= 1",
            question: "",
            number: "",
        };
    }

    if (questionNumber > data.length) {
        return {
            error: `Question number must be less than the number of questions (${data.length})`,
            question: "",
            number: "",
        };
    }

    const questionData = data[questionNumber - 1];

    return {
        error: "",
        question: questionData.question,
        number: questionNumber,
        answer: questionData.answer,
    };
}

/* -------------------------------------------------------------------------- */
/*                               Module Testing:                              */
/* -------------------------------------------------------------------------- */

function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};