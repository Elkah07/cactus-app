// ====================
// VARIABLES
// ====================

const loginScreen = document.getElementById("loginScreen");
const pseudoScreen = document.getElementById("pseudoScreen");
const coupleScreen = document.getElementById("coupleScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const rankingScreen = document.getElementById("rankingScreen");
const rankingResultScreen = document.getElementById("rankingResultScreen");

const goPseudoBtn = document.getElementById("goPseudoBtn");
const savePseudoBtn = document.getElementById("savePseudoBtn");
const createSpaceBtn = document.getElementById("createSpaceBtn");
const joinSpaceBtn = document.getElementById("joinSpaceBtn");

const rankingBtn = document.getElementById("rankingBtn");
const validateRankingBtn = document.getElementById("validateRankingBtn");
const nextRankingBtn = document.getElementById("nextRankingBtn");
const backDashboardBtn = document.getElementById("backDashboardBtn");

const displayPseudo = document.getElementById("displayPseudo");
const spaceCode = document.getElementById("spaceCode");

const rankingTitle = document.getElementById("rankingTitle");
const rankingList = document.getElementById("rankingList");

let pseudo = "";
let currentSpaceCode = "";

let rankings = [];
let currentRanking = null;
let lastRankingId = null;
let draggedItem = null;

// ====================
// CHARGEMENT DES DONNÉES
// ====================

async function loadRankingsData() {
    const response = await fetch("data/rankings.json");
    const data = await response.json();

    if (Array.isArray(data)) {
        rankings = data;
    } else {
        rankings = data.rankings;
    }

    console.log("Classements chargés :", rankings);
}

// ====================
// ÉVÉNEMENTS
// ====================

goPseudoBtn.addEventListener("click", () => {
    showScreen("pseudo");
});

savePseudoBtn.addEventListener("click", () => {
    pseudo = document.getElementById("pseudo").value.trim();

    if (pseudo === "") {
        alert("Choisis un pseudo 🌵");
        return;
    }

    showScreen("couple");
});

createSpaceBtn.addEventListener("click", () => {
    currentSpaceCode = generateSpaceCode();

    displayPseudo.textContent = pseudo;
    spaceCode.textContent = currentSpaceCode;

    showScreen("dashboard");
});

joinSpaceBtn.addEventListener("click", () => {
    const joinCode = document.getElementById("joinCode").value.trim();

    if (joinCode === "") {
        alert("Entre un code d'espace 🌵");
        return;
    }

    currentSpaceCode = joinCode.toUpperCase();

    displayPseudo.textContent = pseudo;
    spaceCode.textContent = currentSpaceCode;

    showScreen("dashboard");
});

rankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

validateRankingBtn.addEventListener("click", () => {
    const items = rankingList.querySelectorAll("li");

    const answer = [];

    items.forEach((item) => {
        answer.push(item.textContent);
    });

    saveRankingAnswer(
        currentRanking.id,
        answer
    );

    console.log("Réponses sauvegardées :", getRankingAnswers());

    showRankingResult();
});

nextRankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

backDashboardBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

// ====================
// FONCTIONS
// ====================

function startRandomRanking() {
    if (rankings.length === 0) {
        alert("Les classements chargent encore 🌵");
        return;
    }

    currentRanking = getRandomItem(rankings, lastRankingId);
    lastRankingId = currentRanking.id;

    loadRanking(currentRanking);

    showScreen("ranking");
}

// ====================
// LANCEMENT
// ====================

loadRankingsData();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}