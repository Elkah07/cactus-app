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

const rankingNotification = document.getElementById("rankingNotification");

let currentUser = null;

let pseudo = "";
let currentSpaceCode = "";

let rankings = [];
let currentRanking = null;
let lastRankingId = null;
let draggedItem = null;

let currentSpaceData = null;

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
        } else {
            partnerName.textContent = "En attente...";
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
    console.log("Défi classement sauvegardé dans Firebase");
    showRankingResult();
});
});

nextRankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

backDashboardBtn.addEventListener("click", () => {
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

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

function displayRankingChallenges(challenges) {
    const challengeArray = Object.values(challenges);

    const pendingChallenges = challengeArray.filter((challenge) => {
        if (!challenge.answers) {
            return false;
        }

        const alreadyAnswered = challenge.answers[currentUser.uid];

        const answeredBySomeoneElse = Object.keys(challenge.answers).some((uid) => {
            return uid !== currentUser.uid;
        });

        return !alreadyAnswered && answeredBySomeoneElse;
    });

    if (pendingChallenges.length === 0) {
        rankingNotification.textContent = "";
        return;
    }

    if (pendingChallenges.length === 1) {
        rankingNotification.textContent = "🌵 1 classement t’attend";
    } else {
        rankingNotification.textContent = `🌵 ${pendingChallenges.length} classements t’attendent`;
    }
}