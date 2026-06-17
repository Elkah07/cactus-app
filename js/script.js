// ====================
// VARIABLES
// ====================

const loginScreen = document.getElementById("loginScreen");
const pseudoScreen = document.getElementById("pseudoScreen");
const coupleScreen = document.getElementById("coupleScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const rankingScreen = document.getElementById("rankingScreen");
const rankingResultScreen = document.getElementById("rankingResultScreen");

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
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authMessage = document.getElementById("authMessage");
const logoutBtn = document.getElementById("logoutBtn");

const partnerName = document.getElementById("partnerName");
const leaveSpaceBtn = document.getElementById("leaveSpaceBtn");

const backFromRankingBtn = document.getElementById("backFromRankingBtn");
const backToLoginBtn = document.getElementById("backToLoginBtn");

const rankingNotification = document.getElementById("rankingNotification");
const logoutFromCoupleBtn = document.getElementById("logoutFromCoupleBtn");

const settingsScreen = document.getElementById("settingsScreen");
const settingsBtn = document.getElementById("settingsBtn");
const newPseudo = document.getElementById("newPseudo");
const saveNewPseudoBtn = document.getElementById("saveNewPseudoBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const backFromSettingsBtn = document.getElementById("backFromSettingsBtn");

const rankingCompatibilityScreen = document.getElementById("rankingCompatibilityScreen");
const rankingCompatibilityTitle = document.getElementById("rankingCompatibilityTitle");
const rankingCompatibilityScore = document.getElementById("rankingCompatibilityScore");
const rankingCompatibilityLabel = document.getElementById("rankingCompatibilityLabel");
const myRankingResult = document.getElementById("myRankingResult");
const partnerRankingResult = document.getElementById("partnerRankingResult");
const perfectMatchesList = document.getElementById("perfectMatchesList");
const biggestGapsList = document.getElementById("biggestGapsList");
const nextAfterCompatibilityBtn = document.getElementById("nextAfterCompatibilityBtn");
const backDashboardAfterCompatibilityBtn = document.getElementById("backDashboardAfterCompatibilityBtn");

let currentUser = null;

let pseudo = "";
let currentSpaceCode = "";

let rankings = [];
let currentRanking = null;
let lastRankingId = null;
let draggedItem = null;

let currentSpaceData = null;
let pendingRankingChallenges = [];
let previousScreen = "dashboard";

let isPlayingPendingChallenges = false;
let currentPendingChallengeIndex = 0;

// ====================
// CHARGEMENT DES DONNÉES
// ====================

function listenToCurrentSpace(spaceCodeValue) {
    database.ref("spaces/" + spaceCodeValue).on("value", (snapshot) => {
        const spaceData = snapshot.val();

        if (!spaceData) {
            return;
        }

        currentSpaceData = spaceData;

        let partner = null;

        if (
            spaceData.player1 &&
            spaceData.player1.uid !== currentUser.uid
        ) {
            partner = spaceData.player1;
        }

        if (
            spaceData.player2 &&
            spaceData.player2.uid !== currentUser.uid
        ) {
            partner = spaceData.player2;
        }

        if (partner) {
            partnerName.textContent = partner.pseudo || "Partenaire";
            document.querySelector(".tiny-space-code").innerHTML =
                "🌵 Espace relié";
        } else {
            partnerName.textContent = "En attente...";
            document.querySelector(".tiny-space-code").innerHTML =
                `Code : <span>${spaceCodeValue}</span>`;
        }

        listenToRankingChallenges();
    });
}

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



savePseudoBtn.addEventListener("click", () => {
    pseudo = document.getElementById("pseudo").value.trim();

    if (pseudo === "") {
        alert("Choisis ton pseudo 🌵");
        return;
    }

    database.ref("users/" + currentUser.uid).set({
        pseudo: pseudo,
        email: currentUser.email,
        createdAt: Date.now()
    })
    .then(() => {
        console.log("Pseudo sauvegardé !");
        showScreen("couple");
    })
    .catch((error) => {
        console.error(error);
        alert(error.message);
    });
});

createSpaceBtn.addEventListener("click", () => {
    currentSpaceCode = generateSpaceCode();

    database.ref("spaces/" + currentSpaceCode).set({
        code: currentSpaceCode,
        createdAt: Date.now(),
        player1: {
            uid: currentUser.uid,
            pseudo: pseudo
        },
        player2: null
    }).then(() => {
        return database.ref("users/" + currentUser.uid).update({
            spaceCode: currentSpaceCode
        });
    }).then(() => {
        displayPseudo.textContent = pseudo;
        spaceCode.textContent = currentSpaceCode;

        listenToCurrentSpace(currentSpaceCode);

        showScreen("dashboard");
    });
});

joinSpaceBtn.addEventListener("click", () => {
    const joinCode = document.getElementById("joinCode").value.trim().toUpperCase();

    if (joinCode === "") {
        alert("Entre un code d'espace 🌵");
        return;
    }

    database.ref("spaces/" + joinCode).once("value")
        .then((snapshot) => {
            if (!snapshot.exists()) {
                alert("Cet espace n'existe pas 🌵");
                return;
            }

            const spaceData = snapshot.val();

            const isPlayer1 =
                spaceData.player1 &&
                spaceData.player1.uid === currentUser.uid;

            const isPlayer2 =
                spaceData.player2 &&
                spaceData.player2.uid === currentUser.uid;

            if (isPlayer1 || isPlayer2) {
                return database.ref("users/" + currentUser.uid).update({
                    spaceCode: joinCode
                }).then(() => {
                    currentSpaceCode = joinCode;
                    spaceCode.textContent = currentSpaceCode;
                    displayPseudo.textContent = pseudo;

                    listenToCurrentSpace(currentSpaceCode);
                    showScreen("dashboard");
                });
            }

            if (spaceData.player1 && spaceData.player2) {
                alert("Cet espace est déjà complet 🌵");
                return;
            }

            const playerSlot = spaceData.player1 ? "player2" : "player1";

            return database.ref("spaces/" + joinCode + "/" + playerSlot).set({
                uid: currentUser.uid,
                pseudo: pseudo
            }).then(() => {
                return database.ref("users/" + currentUser.uid).update({
                    spaceCode: joinCode
                });
            }).then(() => {
                currentSpaceCode = joinCode;
                spaceCode.textContent = currentSpaceCode;
                displayPseudo.textContent = pseudo;

                listenToCurrentSpace(currentSpaceCode);
                showScreen("dashboard");
            });
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});

rankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

validateRankingBtn.addEventListener("click", () => {
    const items = rankingList.querySelectorAll("li");

    const answer = [];

    items.forEach((item) => {
        answer.push(
    item.querySelector(".ranking-item-text").textContent
);
    });

    saveRankingAnswer(
    currentRanking.id,
    answer
);

saveRankingChallenge(
    currentRanking.id,
    answer
).then(() => {
    return showRankingCompatibilityIfReady(currentRanking.id);
});

nextRankingBtn.addEventListener("click", () => {
    if (isPlayingPendingChallenges) {
        currentPendingChallengeIndex++;
        startPendingRankingChallenge();
        return;
    }

    startRandomRanking();
});

backDashboardBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextAfterCompatibilityBtn.addEventListener("click", () => {
    if (isPlayingPendingChallenges) {
        currentPendingChallengeIndex++;
        startPendingRankingChallenge();
        return;
    }

    startRandomRanking();
});

backDashboardAfterCompatibilityBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

signupBtn.addEventListener("click", () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();

    if (email === "" || password === "") {
        authMessage.textContent = "Entre un e-mail et un mot de passe 🌵";
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            currentUser = userCredential.user;
            showScreen("pseudo");
        })
        .catch((error) => {
            authMessage.textContent = error.message;
        });
});

loginBtn.addEventListener("click", () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();

    if (email === "" || password === "") {
        authMessage.textContent = "Entre ton e-mail et ton mot de passe 🌵";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            currentUser = userCredential.user;
            showScreen("couple");
        })
        .catch((error) => {
            authMessage.textContent = error.message;
        });
});

logoutBtn.addEventListener("click", () => {
    auth.signOut();
});

logoutFromCoupleBtn.addEventListener("click", () => {
    auth.signOut();
});

leaveSpaceBtn.addEventListener("click", () => {
    console.log("Bouton quitter espace cliqué");

    if (currentSpaceCode === "") {
        showScreen("couple");
        return;
    }

    database.ref("spaces/" + currentSpaceCode).once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val();

            if (!spaceData) {
                return;
            }

            if (spaceData.player1 && spaceData.player1.uid === currentUser.uid) {
                return database.ref("spaces/" + currentSpaceCode + "/player1").remove();
            }

            if (spaceData.player2 && spaceData.player2.uid === currentUser.uid) {
                return database.ref("spaces/" + currentSpaceCode + "/player2").remove();
            }
        })
        .then(() => {
            return database.ref("users/" + currentUser.uid + "/spaceCode").remove();
        })
        .then(() => {
            currentSpaceCode = "";
            currentSpaceData = null;

            spaceCode.textContent = "CACTUS-0000";

            if (partnerName) {
                partnerName.textContent = "En attente...";
            }

            showScreen("couple");
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});

rankingNotification.addEventListener("click", () => {
    if (pendingRankingChallenges.length === 0) {
        return;
    }

    isPlayingPendingChallenges = true;
    currentPendingChallengeIndex = 0;

    startPendingRankingChallenge();
});

backFromRankingBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

backToLoginBtn.addEventListener("click", () => {
    showScreen("login");
});

settingsBtn.addEventListener("click", () => {
    previousScreen = "dashboard";
    showScreen("settings");
});

backFromSettingsBtn.addEventListener("click", () => {
    showScreen(previousScreen);
});

saveNewPseudoBtn.addEventListener("click", () => {
    const updatedPseudo = newPseudo.value.trim();

    if (updatedPseudo === "") {
        alert("Entre un pseudo 🌵");
        return;
    }

    pseudo = updatedPseudo;
    displayPseudo.textContent = pseudo;

    database.ref("users/" + currentUser.uid).update({
        pseudo: pseudo
    });

    if (currentSpaceCode !== "") {
        database.ref("spaces/" + currentSpaceCode).once("value")
            .then((snapshot) => {
                const spaceData = snapshot.val();

                if (!spaceData) {
                    return;
                }

                if (spaceData.player1 && spaceData.player1.uid === currentUser.uid) {
                    return database.ref("spaces/" + currentSpaceCode + "/player1/pseudo").set(pseudo);
                }

                if (spaceData.player2 && spaceData.player2.uid === currentUser.uid) {
                    return database.ref("spaces/" + currentSpaceCode + "/player2/pseudo").set(pseudo);
                }
            });
    }

    newPseudo.value = "";
    alert("Pseudo modifié 🌵");
});

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ====================
// FONCTIONS
// ====================

function startRandomRanking() {
    if (rankings.length === 0) {
        alert("Les classements chargent encore 🌵");
        return;
    }

    if (currentSpaceCode === "") {
        alert("Tu dois être dans un espace pour jouer 🌵");
        return;
    }

    currentRanking = getRandomItem(rankings, lastRankingId);
    lastRankingId = currentRanking.id;

    loadRanking(currentRanking);

    showScreen("ranking");
}

function startPendingRankingChallenge() {
    const challenge = pendingRankingChallenges[currentPendingChallengeIndex];

    if (!challenge) {
        isPlayingPendingChallenges = false;
        showScreen("dashboard");
        return;
    }

    const ranking = rankings.find((item) => {
        return item.id === challenge.rankingId;
    });

    if (!ranking) {
        alert("Classement introuvable 🌵");
        currentPendingChallengeIndex++;
        startPendingRankingChallenge();
        return;
    }

    currentRanking = ranking;

    loadRanking(currentRanking);

    showScreen("ranking");
}

function showRankingCompatibilityIfReady(rankingId) {
    return database
        .ref("spaces/" + currentSpaceCode + "/rankingChallenges/" + rankingId)
        .once("value")
        .then((snapshot) => {
            const challenge = snapshot.val();

            if (!challenge || !challenge.answers) {
                showRankingResult();
                return;
            }

            const answersArray = Object.values(challenge.answers);

            if (answersArray.length < 2) {
                showRankingResult();
                return;
            }

            const myAnswerData = answersArray.find((answer) => {
                return answer.uid === currentUser.uid;
            });

            const partnerAnswerData = answersArray.find((answer) => {
                return answer.uid !== currentUser.uid;
            });

            if (!myAnswerData || !partnerAnswerData) {
                showRankingResult();
                return;
            }

            showRankingCompatibility(
                challenge,
                myAnswerData,
                partnerAnswerData
            );
        });
}

function showRankingCompatibility(challenge, myAnswerData, partnerAnswerData) {
    const myAnswer = myAnswerData.answer;
    const partnerAnswer = partnerAnswerData.answer;

    const score = calculateRankingCompatibility(myAnswer, partnerAnswer);
    const label = getCompatibilityLabel(score);
    const analysis = analyzeRankingDifferences(myAnswer, partnerAnswer);

    rankingCompatibilityTitle.textContent = challenge.title;
    rankingCompatibilityScore.textContent = score + "%";
    rankingCompatibilityLabel.textContent = label;

    myRankingResult.innerHTML = "";
    partnerRankingResult.innerHTML = "";
    perfectMatchesList.innerHTML = "";
    biggestGapsList.innerHTML = "";

    myAnswer.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        myRankingResult.appendChild(li);
    });

    partnerAnswer.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        partnerRankingResult.appendChild(li);
    });

    if (analysis.perfectMatches.length === 0) {
        perfectMatchesList.innerHTML = "<li>Aucun accord parfait</li>";
    } else {
        analysis.perfectMatches.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            perfectMatchesList.appendChild(li);
        });
    }

    if (analysis.biggestGaps.length === 0) {
        biggestGapsList.innerHTML = "<li>Aucun grand écart</li>";
    } else {
        analysis.biggestGaps.forEach((gap) => {
            const li = document.createElement("li");
            li.textContent = `${gap.item} : ${gap.gap} places d'écart`;
            biggestGapsList.appendChild(li);
        });
    }

    showScreen("rankingCompatibility");
}

// ====================
// LANCEMENT
// ====================

auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;

        database.ref("users/" + currentUser.uid).once("value")
            .then((snapshot) => {
                const userData = snapshot.val();

                if (!userData) {
                    showScreen("pseudo");
                    return;
                }

                pseudo = userData.pseudo || "";
                displayPseudo.textContent = pseudo;

                if (userData.spaceCode) {
                    currentSpaceCode = userData.spaceCode;
                    spaceCode.textContent = currentSpaceCode;

                    listenToCurrentSpace(currentSpaceCode);

                    showScreen("dashboard");
                } else {
                    showScreen("couple");
                }
            });
    } else {
        currentUser = null;
        showScreen("login");
    }
});

loadRankingsData();

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

function displayRankingChallenges(challenges) {
    const challengeArray = Object.values(challenges);

    pendingRankingChallenges = challengeArray.filter((challenge) => {
        if (!challenge.answers) {
            return false;
        }

        const alreadyAnswered = challenge.answers[currentUser.uid];

        const answeredBySomeoneElse = Object.keys(challenge.answers).some((uid) => {
            return uid !== currentUser.uid;
        });

        return !alreadyAnswered && answeredBySomeoneElse;
    });

    if (pendingRankingChallenges.length === 0) {
        rankingNotification.textContent = "";
        rankingNotification.style.cursor = "default";
        return;
    }

    if (pendingRankingChallenges.length === 1) {
        rankingNotification.textContent = "🌵 1 classement t’attend";
    } else {
        rankingNotification.textContent = `🌵 ${pendingRankingChallenges.length} classements t’attendent`;
    }

    rankingNotification.style.cursor = "pointer";
}