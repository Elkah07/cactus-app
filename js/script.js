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

const rankingCompatibilityDescription = document.getElementById("rankingCompatibilityDescription");
const myRankingName = document.getElementById("myRankingName");
const partnerRankingName = document.getElementById("partnerRankingName");
const rankingCompatibilityInsight = document.getElementById("rankingCompatibilityInsight");

const historyScreen = document.getElementById("historyScreen");
const historyBtn = document.getElementById("historyBtn");
const historyList = document.getElementById("historyList");
const backFromHistoryBtn = document.getElementById("backFromHistoryBtn");

const gardenScreen = document.getElementById("gardenScreen");
const gardenBtn = document.getElementById("gardenBtn");
const noteText = document.getElementById("noteText");
const noteColor = document.getElementById("noteColor");
const noteFont = document.getElementById("noteFont");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const notesList = document.getElementById("notesList");
const backFromGardenBtn = document.getElementById("backFromGardenBtn");

const listTitle = document.getElementById("listTitle");
const createListBtn = document.getElementById("createListBtn");
const listsContainer = document.getElementById("listsContainer");

const showCreateNotebookBtn = document.getElementById("showCreateNotebookBtn");
const createNotebookBox = document.getElementById("createNotebookBox");
const notebookEmoji = document.getElementById("notebookEmoji");
const notebookTitle = document.getElementById("notebookTitle");
const notebookColor = document.getElementById("notebookColor");
const createNotebookBtn = document.getElementById("createNotebookBtn");
const notebooksGrid = document.getElementById("notebooksGrid");

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

historyBtn.addEventListener("click", () => {
    loadHistory();
});

backFromHistoryBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

gardenBtn.addEventListener("click", () => {
    loadNotebooks();
    showScreen("garden");
});

backFromGardenBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

saveNoteBtn.addEventListener("click", () => {
    const text = noteText.value.trim();

    if (text === "") {
        alert("Écris une note avant de la planter 🌵");
        return;
    }

    const note = {
        text: text,
        author: pseudo,
        uid: currentUser.uid,
        color: noteColor.value,
        font: noteFont.value,
        createdAt: Date.now()
    };

    database
        .ref("spaces/" + currentSpaceCode + "/garden/notes")
        .push(note)
        .then(() => {
            noteText.value = "";
            loadGardenNotes();
        });
});

createListBtn.addEventListener("click", () => {
    const title = listTitle.value.trim();

    if (title === "") {
        alert("Donne un titre à ta liste 🌵");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/garden/lists")
        .push({
            title: title,
            createdBy: pseudo,
            createdAt: Date.now()
        })
        .then(() => {
            listTitle.value = "";
            loadGardenLists();
        });
});

showCreateNotebookBtn.addEventListener("click", () => {
    if (createNotebookBox.style.display === "none") {
        createNotebookBox.style.display = "block";
    } else {
        createNotebookBox.style.display = "none";
    }
});

createNotebookBtn.addEventListener("click", () => {
    const emoji = notebookEmoji.value.trim() || "📝";
    const title = notebookTitle.value.trim();

    if (title === "") {
        alert("Donne un titre à ton carnet 🌵");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/garden/notebooks")
        .push({
            emoji: emoji,
            title: title,
            color: notebookColor.value,
            createdBy: pseudo,
            createdAt: Date.now()
        })
        .then(() => {
            notebookEmoji.value = "";
            notebookTitle.value = "";
            createNotebookBox.style.display = "none";
            loadNotebooks();
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

            database.ref(
    "spaces/" +
    currentSpaceCode +
    "/rankingChallenges/" +
    challenge.rankingId
).update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateRankingCompatibility(
        myAnswerData.answer,
        partnerAnswerData.answer
    )
});

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
    rankingCompatibilityInsight.textContent =
    generateRankingInsight(analysis);

    rankingCompatibilityTitle.textContent = challenge.title;
    rankingCompatibilityScore.textContent = score + "%";
    if (score >= 90) {
    cactusCelebration.style.display = "block";
} else {
    cactusCelebration.style.display = "none";
}
    rankingCompatibilityLabel.textContent = label;
    myRankingName.textContent = pseudo || "Toi";
partnerRankingName.textContent = partnerAnswerData.pseudo || "Partenaire";

    rankingCompatibilityScore.className = "";
    rankingCompatibilityDescription.textContent =
    generateCompatibilityDescription(score);

if (score >= 80) {
    rankingCompatibilityScore.classList.add("score-perfect");
} else if (score >= 60) {
    rankingCompatibilityScore.classList.add("score-good");
} else if (score >= 40) {
    rankingCompatibilityScore.classList.add("score-medium");
} else {
    rankingCompatibilityScore.classList.add("score-low");
}

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

function loadHistory() {
    historyList.innerHTML = "";

    database
        .ref("spaces/" + currentSpaceCode + "/rankingChallenges")
        .once("value")
        .then((snapshot) => {
            const challenges = snapshot.val() || {};
            const historyItems = Object.values(challenges).filter((challenge) => {
                return challenge.status === "completed";
            });

            if (historyItems.length === 0) {
                historyList.innerHTML =
                    '<p class="empty-text">Aucun souvenir pour le moment 🌵</p>';
                showScreen("history");
                return;
            }

            historyItems
                .sort((a, b) => b.completedAt - a.completedAt)
                .forEach((challenge) => {
                    const card = document.createElement("div");
                    card.classList.add("history-card");

                    const title = document.createElement("h3");
                    title.textContent = "🌵 " + challenge.title;

                    const score = document.createElement("span");
score.classList.add("history-score");

score.textContent =
    getCompatibilityHearts(challenge.compatibility) +
    " " +
    challenge.compatibility +
    "%";

card.appendChild(title);
card.appendChild(score);

                    historyList.appendChild(card);
                });

            showScreen("history");
        });
}

function loadGardenNotes() {
    notesList.innerHTML = "";

    database
        .ref("spaces/" + currentSpaceCode + "/garden/notes")
        .once("value")
        .then((snapshot) => {
            const notes = snapshot.val() || {};
            const notesArray = Object.values(notes);

            if (notesArray.length === 0) {
                notesList.innerHTML =
                    '<p class="empty-text">Aucune note plantée pour le moment 🌱</p>';
                return;
            }

            notesArray
                .sort((a, b) => b.createdAt - a.createdAt)
                .forEach((note) => {
                    const card = document.createElement("div");
                    card.classList.add("note-card");
                    card.classList.add("font-" + note.font);

                    card.style.color = note.color;

                    const text = document.createElement("p");
                    text.textContent = note.text;

                    const meta = document.createElement("small");
                    meta.textContent = "Plantée par " + note.author;

                    card.appendChild(text);
                    card.appendChild(meta);

                    notesList.appendChild(card);
                });
        });
}

function loadGardenLists() {
    listsContainer.innerHTML = "";

    database
        .ref("spaces/" + currentSpaceCode + "/garden/lists")
        .once("value")
        .then((snapshot) => {
            const lists = snapshot.val() || {};
            const listsArray = Object.entries(lists);

            if (listsArray.length === 0) {
                listsContainer.innerHTML =
                    '<p class="empty-text">Aucune liste pour le moment 📋</p>';
                return;
            }

            listsArray
                .sort((a, b) => b[1].createdAt - a[1].createdAt)
                .forEach(([listId, list]) => {
                    renderGardenList(listId, list);
                });
        });
}

function renderGardenList(listId, list) {
    const listCard = document.createElement("div");
    listCard.classList.add("garden-list-card");

    const title = document.createElement("h3");
    title.textContent = list.title;

    const meta = document.createElement("small");
    meta.textContent = "Créée par " + (list.createdBy || "Cactus");

    const itemsBox = document.createElement("div");
    itemsBox.classList.add("garden-list-items");

    if (list.items) {
        Object.entries(list.items).forEach(([itemId, item]) => {
            const itemRow = document.createElement("label");
            itemRow.classList.add("garden-list-item");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = item.checked === true;

            const itemText = document.createElement("span");
            itemText.textContent = item.text;

            if (item.checked) {
                itemText.classList.add("checked-item");
            }

            checkbox.addEventListener("change", () => {
                database
                    .ref(
                        "spaces/" +
                        currentSpaceCode +
                        "/garden/lists/" +
                        listId +
                        "/items/" +
                        itemId +
                        "/checked"
                    )
                    .set(checkbox.checked)
                    .then(() => {
                        loadGardenLists();
                    });
            });

            itemRow.appendChild(checkbox);
            itemRow.appendChild(itemText);

            itemsBox.appendChild(itemRow);
        });
    }

    const newItemInput = document.createElement("input");
    newItemInput.type = "text";
    newItemInput.placeholder = "Nouvel élément";

    const addItemBtn = document.createElement("button");
    addItemBtn.textContent = "Ajouter";
    addItemBtn.classList.add("small-btn");

    addItemBtn.addEventListener("click", () => {
        const text = newItemInput.value.trim();

        if (text === "") {
            return;
        }

        database
            .ref(
                "spaces/" +
                currentSpaceCode +
                "/garden/lists/" +
                listId +
                "/items"
            )
            .push({
                text: text,
                checked: false,
                createdAt: Date.now()
            })
            .then(() => {
                loadGardenLists();
            });
    });

    listCard.appendChild(title);
    listCard.appendChild(meta);
    listCard.appendChild(itemsBox);
    listCard.appendChild(newItemInput);
    listCard.appendChild(addItemBtn);

    listsContainer.appendChild(listCard);
}

function loadNotebooks() {
    notebooksGrid.innerHTML = "";

    database
        .ref("spaces/" + currentSpaceCode + "/garden/notebooks")
        .once("value")
        .then((snapshot) => {
            const notebooks = snapshot.val() || {};
            const notebooksArray = Object.entries(notebooks);

            if (notebooksArray.length === 0) {
                notebooksGrid.innerHTML =
                    '<p class="empty-text">Aucun carnet pour le moment 🪴</p>';
                return;
            }

            notebooksArray
                .sort((a, b) => b[1].createdAt - a[1].createdAt)
                .forEach(([notebookId, notebook]) => {
                    const card = document.createElement("div");
                    card.classList.add("notebook-card");
                    card.style.background = notebook.color || "#D8F3DC";

                    const emoji = document.createElement("div");
                    emoji.classList.add("notebook-emoji");
                    emoji.textContent = notebook.emoji || "📝";

                    const title = document.createElement("h3");
                    title.textContent = notebook.title;

                    const meta = document.createElement("small");
                    meta.textContent = "Par " + (notebook.createdBy || "Cactus");

                    card.appendChild(emoji);
                    card.appendChild(title);
                    card.appendChild(meta);

                    notebooksGrid.appendChild(card);
                });
        });
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
        if (challenge.status === "completed") {
            return false;
        }

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

    const firstChallenge = pendingRankingChallenges[0];
const firstAnswer = Object.values(firstChallenge.answers)[0];
const senderName = firstAnswer.pseudo || "Ton/ta partenaire";

if (pendingRankingChallenges.length === 1) {
    rankingNotification.textContent = `💚 ${senderName} t’a envoyé un classement`;
} else {
    rankingNotification.textContent = `💚 ${senderName} t’a envoyé ${pendingRankingChallenges.length} classements`;
}

    rankingNotification.style.cursor = "pointer";
}