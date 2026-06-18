// Ce fichier servira plus tard pour le mode Questions.
let likelyQuestions = [];

fetch("data/likely.json")
    .then((response) => response.json())
    .then((data) => {
        likelyQuestions = data;
    });