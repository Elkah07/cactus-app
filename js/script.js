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
const cactusCelebration = document.getElementById("cactusCelebration");

const historyScreen = document.getElementById("historyScreen");
const historyBtn = document.getElementById("historyBtn");
const historyList = document.getElementById("historyList");
const backFromHistoryBtn = document.getElementById("backFromHistoryBtn");

const gardenScreen = document.getElementById("gardenScreen");
const gardenBtn = document.getElementById("gardenBtn");
const backFromGardenBtn = document.getElementById("backFromGardenBtn");

const showCreateNotebookBtn = document.getElementById("showCreateNotebookBtn");
const createNotebookBox = document.getElementById("createNotebookBox");
const notebookEmoji = document.getElementById("notebookEmoji");
const notebookTitle = document.getElementById("notebookTitle");
const notebookColor = document.getElementById("notebookColor");
const createNotebookBtn = document.getElementById("createNotebookBtn");
const notebooksGrid = document.getElementById("notebooksGrid");

const notebookScreen = document.getElementById("notebookScreen");
const openedNotebookTitle = document.getElementById("openedNotebookTitle");
const backToGardenBtn = document.getElementById("backToGardenBtn");
const renameNotebookBtn = document.getElementById("renameNotebookBtn");
const deleteNotebookBtn = document.getElementById("deleteNotebookBtn");

const notebookEditor = document.getElementById("notebookEditor");
const insertCheckboxLineBtn = document.getElementById("insertCheckboxLineBtn");

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");
const textColorPicker = document.getElementById("textColorPicker");
const highlightColorPicker = document.getElementById("highlightColorPicker");

const guessBtn = document.getElementById("guessBtn");
const guessAnswerScreen = document.getElementById("guessAnswerScreen");
const guessWaitingScreen = document.getElementById("guessWaitingScreen");
const guessPredictScreen = document.getElementById("guessPredictScreen");
const guessValidationScreen = document.getElementById("guessValidationScreen");
const guessResultScreen =     document.getElementById("guessResultScreen");
const guessQuestionText =    document.getElementById("guessQuestionText");
const guessAnswerInput =    document.getElementById("guessAnswerInput");
const validateGuessAnswerBtn =    document.getElementById("validateGuessAnswerBtn");
const backFromGuessBtn =     document.getElementById("backFromGuessBtn");
const backDashboardFromGuessWaitBtn =    document.getElementById("backDashboardFromGuessWaitBtn");
const guessPredictQuestionText =    document.getElementById("guessPredictQuestionText");
const guessPredictionInput =    document.getElementById("guessPredictionInput");
const validateGuessPredictionBtn =    document.getElementById("validateGuessPredictionBtn");
const guessValidationQuestion =    document.getElementById("guessValidationQuestion");
const myRealGuessAnswer =    document.getElementById("myRealGuessAnswer");
const partnerPredictionAboutMe =    document.getElementById("partnerPredictionAboutMe");
const guessTrueBtn =    document.getElementById("guessTrueBtn");
const guessAlmostBtn =    document.getElementById("guessAlmostBtn");
const guessFalseBtn =    document.getElementById("guessFalseBtn");
const guessResultQuestion =    document.getElementById("guessResultQuestion");
const guessResultScore =    document.getElementById("guessResultScore");
const guessResultLabel =    document.getElementById("guessResultLabel");
const guessMyAnswerResult =    document.getElementById("guessMyAnswerResult");
const guessMyPredictionResult =    document.getElementById("guessMyPredictionResult");
const guessPartnerAnswerResult =    document.getElementById("guessPartnerAnswerResult");
const guessValidationResult =    document.getElementById("guessValidationResult");
const nextGuessBtn =    document.getElementById("nextGuessBtn");
const backDashboardFromGuessResultBtn =    document.getElementById("backDashboardFromGuessResultBtn");

const activityBox = document.getElementById("activityBox");
const activityList = document.getElementById("activityList");

const likelyBtn = document.getElementById("likelyBtn");

const likelyScreen =
    document.getElementById("likelyScreen");

const likelyResultScreen =
    document.getElementById("likelyResultScreen");

const likelyQuestionText =
    document.getElementById("likelyQuestionText");

const likelyMeBtn =
    document.getElementById("likelyMeBtn");

const likelyPartnerBtn =
    document.getElementById("likelyPartnerBtn");

const likelyBothBtn =
    document.getElementById("likelyBothBtn");

const backFromLikelyBtn =
    document.getElementById("backFromLikelyBtn");

const likelyResultQuestion =
    document.getElementById("likelyResultQuestion");

const likelyMyAnswer =
    document.getElementById("likelyMyAnswer");

const likelyPartnerAnswer =
    document.getElementById("likelyPartnerAnswer");

const nextLikelyBtn =
    document.getElementById("nextLikelyBtn");

const backDashboardFromLikelyBtn =
    document.getElementById("backDashboardFromLikelyBtn");

    const likelyVerdictEmoji =
    document.getElementById("likelyVerdictEmoji");

const likelyVerdictText =
    document.getElementById("likelyVerdictText");

    const okBtn = document.getElementById("okBtn");

const okScreen = document.getElementById("okScreen");
const okResultScreen = document.getElementById("okResultScreen");

const okQuestionText = document.getElementById("okQuestionText");

const okYesBtn = document.getElementById("okYesBtn");
const okDependsBtn = document.getElementById("okDependsBtn");
const okNoBtn = document.getElementById("okNoBtn");

const backFromOkBtn = document.getElementById("backFromOkBtn");

const okResultQuestion = document.getElementById("okResultQuestion");
const okVerdictEmoji = document.getElementById("okVerdictEmoji");
const okVerdictText = document.getElementById("okVerdictText");
const okMyAnswer = document.getElementById("okMyAnswer");
const okPartnerAnswer = document.getElementById("okPartnerAnswer");

const nextOkBtn = document.getElementById("nextOkBtn");
const backDashboardFromOkBtn = document.getElementById("backDashboardFromOkBtn");

const greenFlagBtn =
    document.getElementById("greenFlagBtn");

const greenFlagScreen =
    document.getElementById("greenFlagScreen");

const greenFlagResultScreen =
    document.getElementById("greenFlagResultScreen");

const greenFlagQuestionText =
    document.getElementById("greenFlagQuestionText");

const greenFlagYesBtn =
    document.getElementById("greenFlagYesBtn");

const greenFlagNeutralBtn =
    document.getElementById("greenFlagNeutralBtn");

const greenFlagNoBtn =
    document.getElementById("greenFlagNoBtn");

const backFromGreenFlagBtn =
    document.getElementById("backFromGreenFlagBtn");

const greenFlagResultQuestion =
    document.getElementById("greenFlagResultQuestion");

const greenFlagVerdictEmoji =
    document.getElementById("greenFlagVerdictEmoji");

const greenFlagVerdictText =
    document.getElementById("greenFlagVerdictText");

const greenFlagMyAnswer =
    document.getElementById("greenFlagMyAnswer");

const greenFlagPartnerAnswer =
    document.getElementById("greenFlagPartnerAnswer");

const nextGreenFlagBtn =
    document.getElementById("nextGreenFlagBtn");

const backDashboardFromGreenFlagBtn =
    document.getElementById("backDashboardFromGreenFlagBtn");

    const princessBtn = document.getElementById("princessBtn");

const princessScreen = document.getElementById("princessScreen");
const princessResultScreen = document.getElementById("princessResultScreen");

const princessQuestionText = document.getElementById("princessQuestionText");

const princessYesBtn = document.getElementById("princessYesBtn");
const princessDependsBtn = document.getElementById("princessDependsBtn");
const princessNoBtn = document.getElementById("princessNoBtn");

const backFromPrincessBtn = document.getElementById("backFromPrincessBtn");

const princessResultQuestion = document.getElementById("princessResultQuestion");
const princessVerdictEmoji = document.getElementById("princessVerdictEmoji");
const princessVerdictText = document.getElementById("princessVerdictText");
const princessMyAnswer = document.getElementById("princessMyAnswer");
const princessPartnerAnswer = document.getElementById("princessPartnerAnswer");

const nextPrincessBtn = document.getElementById("nextPrincessBtn");
const backDashboardFromPrincessBtn = document.getElementById("backDashboardFromPrincessBtn");

const questionsBtn = document.getElementById("questionsBtn");

const questionsScreen = document.getElementById("questionsScreen");
const questionsResultScreen = document.getElementById("questionsResultScreen");

const questionsQuestionText = document.getElementById("questionsQuestionText");
const questionsAnswerInput = document.getElementById("questionsAnswerInput");
const validateQuestionsAnswerBtn = document.getElementById("validateQuestionsAnswerBtn");
const backFromQuestionsBtn = document.getElementById("backFromQuestionsBtn");

const questionsResultQuestion = document.getElementById("questionsResultQuestion");
const questionsMyAnswer = document.getElementById("questionsMyAnswer");
const questionsPartnerAnswer = document.getElementById("questionsPartnerAnswer");

const nextQuestionsBtn = document.getElementById("nextQuestionsBtn");
const backDashboardFromQuestionsBtn = document.getElementById("backDashboardFromQuestionsBtn");

const toastMessage = document.getElementById("toastMessage");

const answerSentScreen = document.getElementById("answerSentScreen");
const answerSentNextBtn = document.getElementById("answerSentNextBtn");
const answerSentDashboardBtn = document.getElementById("answerSentDashboardBtn");

const historyDetailScreen = document.getElementById("historyDetailScreen");
const historyDetailTitle = document.getElementById("historyDetailTitle");
const historyDetailList = document.getElementById("historyDetailList");
const backToHistoryBtn = document.getElementById("backToHistoryBtn");

const historyItemScreen = document.getElementById("historyItemScreen");
const historyItemTitle = document.getElementById("historyItemTitle");
const historyItemContent = document.getElementById("historyItemContent");
const backToHistoryDetailBtn = document.getElementById("backToHistoryDetailBtn");

const guessAnswerTitle =
    document.querySelector("#guessAnswerScreen h1");

const guessPredictTitle =
    document.querySelector("#guessPredictScreen h1");

let pendingGuessValidations = [];
let saveNotebookTimeout = null;

let currentNotebookId = null;
let currentNotebookData = null;

let currentUser = null;

let pseudo = "";
let currentSpaceCode = "";

let rankings = [];
let currentRanking = null;
let guessQuestions = [];
let currentGuessQuestion = null;
let currentGuessId = null;
let lastRankingId = null;
let draggedItem = null;

let currentSpaceData = null;
let pendingRankingChallenges = [];
let previousScreen = "dashboard";

let isPlayingPendingChallenges = false;
let currentPendingChallengeIndex = 0;

let pendingGuessAnswers = []; 
let currentPendingGuessIndex = 0;

let pendingGuessPredictions = [];

let pendingGuessResults = [];

let likelyQuestions = [];

let currentLikelyQuestion = null;
let currentLikelyId = null;

let pendingLikelyChallenges = [];
let pendingLikelyResults = [];
let currentPendingLikelyIndex = 0;

let okQuestions = [];
let currentOkQuestion = null;
let currentOkId = null;

let pendingOkChallenges = [];
let pendingOkResults = [];
let currentPendingOkIndex = 0;

let greenFlagQuestions = [];
let currentGreenFlagQuestion = null;
let currentGreenFlagId = null;

let pendingGreenFlagChallenges = [];
let pendingGreenFlagResults = [];
let currentPendingGreenFlagIndex = 0;

let princessQuestions = [];
let currentPrincessQuestion = null;
let currentPrincessId = null;

let pendingPrincessChallenges = [];
let pendingPrincessResults = [];
let currentPendingPrincessIndex = 0;

let coupleQuestions = [];
let currentCoupleQuestion = null;
let currentCoupleQuestionId = null;

let pendingQuestionsChallenges = [];
let pendingQuestionsResults = [];
let currentPendingQuestionsIndex = 0;

let pendingRankingResults = [];
let currentPendingRankingResultIndex = 0;

let nextAfterAnswerFunction = null;

let currentHistoryMode = null;
let currentHistoryItems = []; 


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
        listenToGuessChallenges();
        listenToLikelyChallenges();
        listenToOkChallenges();
        listenToGreenFlagChallenges();
        listenToPrincessChallenges();
        listenToQuestionsChallenges();
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

async function loadLikelyQuestionsData() {
    const response =
        await fetch("data/likely.json");

    likelyQuestions =
        await response.json();

    console.log(
        "Questions Likely chargées :",
        likelyQuestions
    );
}

async function loadOkQuestionsData() {
    const response = await fetch("data/ok-ou-pas-ok.json");
    okQuestions = await response.json();

    console.log("Questions OK ou Pas OK chargées :", okQuestions);
}

loadOkQuestionsData();


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
    localStorage.setItem("currentSpaceCode", currentSpaceCode);

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
                    localStorage.setItem("currentSpaceCode", currentSpaceCode);
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

guessBtn.addEventListener("click", () => {
    if (guessQuestions.length === 0) {
        alert("Les questions chargent encore 🌵");
        return;
    }

    currentGuessQuestion =
        getRandomItem(guessQuestions);

    guessQuestionText.textContent =
        currentGuessQuestion.question;

    guessAnswerInput.value = "";

    guessAnswerTitle.textContent = "Écris ta réponse";

    showScreen("guessAnswer");
});

validateGuessAnswerBtn.addEventListener("click", () => {
    const answer = guessAnswerInput.value.trim();

    if (answer === "") {
        alert("Écris ta réponse 🌵");
        return;
    }

    currentGuessId = currentGuessQuestion.id;

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            currentGuessId
        )
        .update({
            questionId: currentGuessQuestion.id,
            question: currentGuessQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref(
                    "spaces/" +
                    currentSpaceCode +
                    "/guessAnswers/" +
                    currentGuessId +
                    "/answers/" +
                    currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");
            showScreen();
        });
});

backFromGuessBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

backDashboardFromGuessWaitBtn.addEventListener("click", () => {
    showScreen("dashboard");
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
    markCurrentRankingResultSeen().then(() => {

        currentPendingRankingResultIndex = 0;

        setTimeout(() => {

            if (pendingRankingResults.length > 0) {
                showPendingRankingResult();
                return;
            }

            if (isPlayingPendingChallenges) {
                currentPendingChallengeIndex++;
                startPendingRankingChallenge();
                return;
            }

            startRandomRanking();

        }, 300);

    });
});

backDashboardAfterCompatibilityBtn.addEventListener("click", () => {
    markCurrentRankingResultSeen().then(() => {
        showScreen("dashboard");
    });
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
    console.log("Connecté :", currentUser.uid);
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
    showScreen("history");
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

backToGardenBtn.addEventListener("click", () => {
    currentNotebookId = null;
    currentNotebookData = null;

    loadNotebooks();
    showScreen("garden");
});


renameNotebookBtn.addEventListener("click", () => {
    if (!currentNotebookId || !currentNotebookData) {
        return;
    }

    const newTitle = prompt(
        "Nouveau nom du carnet",
        currentNotebookData.title
    );

    if (!newTitle || newTitle.trim() === "") {
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId +
            "/title"
        )
        .set(newTitle.trim())
        .then(() => {
            currentNotebookData.title = newTitle.trim();

            openedNotebookTitle.textContent =
                (currentNotebookData.emoji || "📝") +
                " " +
                currentNotebookData.title;
        });
});

deleteNotebookBtn.addEventListener("click", () => {
    if (!currentNotebookId) {
        return;
    }

    const confirmDelete = confirm(
        "Supprimer ce carnet ? Cette action est définitive 🌵"
    );

    if (!confirmDelete) {
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId
        )
        .remove()
        .then(() => {
            currentNotebookId = null;
            currentNotebookData = null;

            loadNotebooks();
            showScreen("garden");
        });
});

boldBtn.addEventListener("click", () => {
    runEditorCommand("bold");
    keepEditorToolbarOpen();
});

italicBtn.addEventListener("click", () => {
    runEditorCommand("italic");
    keepEditorToolbarOpen();
});

underlineBtn.addEventListener("click", () => {
    runEditorCommand("underline");
    keepEditorToolbarOpen();
});

textColorPicker.addEventListener("input", () => {
    runEditorCommand("foreColor", textColorPicker.value);
    keepEditorToolbarOpen();
});

highlightColorPicker.addEventListener("input", () => {
    runEditorCommand("hiliteColor", highlightColorPicker.value);
    keepEditorToolbarOpen();
});

insertCheckboxLineBtn.addEventListener("click", () => {
    notebookEditor.focus();

    document.execCommand(
        "insertHTML",
        false,
        '<p class="checkbox-line"><span class="fake-checkbox" contenteditable="false">☐</span>&nbsp;</p>'
    );

    saveNotebookContent();
    keepEditorToolbarOpen();
});



notebookEditor.addEventListener("click", (event) => {
    const checkbox = event.target.closest(".fake-checkbox");

    if (!checkbox) return;

    event.preventDefault();
    event.stopPropagation();

    const line = checkbox.closest(".checkbox-line");

    if (checkbox.textContent.trim() === "☐") {
        checkbox.textContent = "☑";
        line.classList.add("checked-line");
    } else {
        checkbox.textContent = "☐";
        line.classList.remove("checked-line");
    }

    saveNotebookContent();
});

validateGuessPredictionBtn.addEventListener("click", () => {
    const prediction = guessPredictionInput.value.trim();

    if (prediction === "") {
        alert("Écris ta prédiction 🌵");
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            currentGuessId +
            "/predictions/" +
            currentUser.uid
        )
        .set({
            uid: currentUser.uid,
            pseudo: pseudo,
            prediction: prediction,
            createdAt: Date.now()
        })
        .then(() => {
            alert("Prédiction enregistrée 🌵");
            showScreen("dashboard");
        });
});

guessTrueBtn.addEventListener("click", () => {
    saveGuessValidation("VRAI");
});

guessAlmostBtn.addEventListener("click", () => {
    saveGuessValidation("BOF");
});

guessFalseBtn.addEventListener("click", () => {
    saveGuessValidation("FAUX");
});

nextGuessBtn.addEventListener("click", () => {
    markCurrentGuessResultSeen().then(() => {
        currentPendingGuessIndex = 0;

        setTimeout(() => {
            showPendingGuessResult();
        }, 300);
    });
});

backDashboardFromGuessResultBtn.addEventListener("click", () => {
    markCurrentGuessResultSeen().then(() => {
        showScreen("dashboard");
    });
});

likelyBtn.addEventListener("click", () => {
    startLikelyGame();
});

likelyMeBtn.addEventListener("click", () => {
    saveLikelyAnswer("Moi");
});

likelyPartnerBtn.addEventListener("click", () => {
    saveLikelyAnswer("Toi");
});

likelyBothBtn.addEventListener("click", () => {
    saveLikelyAnswer("Nous deux");
});

backFromLikelyBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextLikelyBtn.addEventListener("click", () => {
    markCurrentLikelyResultSeen().then(() => {
        currentPendingLikelyIndex = 0;

        setTimeout(() => {
            showPendingLikelyResult();
        }, 300);
    });
});

backDashboardFromLikelyBtn.addEventListener("click", () => {
    markCurrentLikelyResultSeen().then(() => {
        showScreen("dashboard");
    });
});

nextLikelyBtn.addEventListener("click", () => {
    markCurrentLikelyResultSeen().then(() => {
        currentPendingLikelyIndex++;
        showPendingLikelyResult();
    });
});

backDashboardFromLikelyBtn.addEventListener("click", () => {
    markCurrentLikelyResultSeen().then(() => {
        showScreen("dashboard");
    });
});

okBtn.addEventListener("click", () => {
    startOkGame();
});

okYesBtn.addEventListener("click", () => {
    saveOkAnswer("OK");
});

okDependsBtn.addEventListener("click", () => {
    saveOkAnswer("Ça dépend");
});

okNoBtn.addEventListener("click", () => {
    saveOkAnswer("Pas OK");
});

backFromOkBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextOkBtn.addEventListener("click", () => {
    markCurrentOkResultSeen().then(() => {
        currentPendingOkIndex = 0;

        setTimeout(() => {
            showPendingOkResult();
        }, 300);
    });
});

backDashboardFromOkBtn.addEventListener("click", () => {
    markCurrentOkResultSeen().then(() => {
        showScreen("dashboard");
    });
});

greenFlagBtn.addEventListener("click", () => {
    startGreenFlagGame();
});

greenFlagYesBtn.addEventListener("click", () => {
    saveGreenFlagAnswer("Green Flag");
});

greenFlagNeutralBtn.addEventListener("click", () => {
    saveGreenFlagAnswer("Neutre");
});

greenFlagNoBtn.addEventListener("click", () => {
    saveGreenFlagAnswer("Red Flag");
});

backFromGreenFlagBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextGreenFlagBtn.addEventListener("click", () => {
    markCurrentGreenFlagResultSeen().then(() => {
        currentPendingGreenFlagIndex = 0;

        setTimeout(() => {
            showPendingGreenFlagResult();
        }, 300);
    });
});

backDashboardFromGreenFlagBtn.addEventListener("click", () => {
    markCurrentGreenFlagResultSeen().then(() => {
        showScreen("dashboard");
    });
});

princessBtn.addEventListener("click", () => {
    startPrincessGame();
});

princessYesBtn.addEventListener("click", () => {
    savePrincessAnswer("Princess Treatment");
});

princessDependsBtn.addEventListener("click", () => {
    savePrincessAnswer("Mitigé");
});

princessNoBtn.addEventListener("click", () => {
    savePrincessAnswer("C’est normal");
});

backFromPrincessBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextPrincessBtn.addEventListener("click", () => {
    markCurrentPrincessResultSeen().then(() => {
        currentPendingPrincessIndex = 0;

        setTimeout(() => {
            showPendingPrincessResult();
        }, 300);
    });
});

backDashboardFromPrincessBtn
    .addEventListener(
        "click",
        () => {

            markCurrentPrincessResultSeen()
                .then(() => {

                showScreen(
                    "dashboard"
                );
            });
        }
    );

    questionsBtn.addEventListener("click", () => {
    startQuestionsGame();
});

validateQuestionsAnswerBtn.addEventListener("click", () => {
    saveQuestionsAnswer();
});

backFromQuestionsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextQuestionsBtn.addEventListener("click", () => {
    markCurrentQuestionsResultSeen().then(() => {
        currentPendingQuestionsIndex = 0;

        setTimeout(() => {
            showPendingQuestionsResult();
        }, 300);
    });
});

backDashboardFromQuestionsBtn.addEventListener("click", () => {
    markCurrentQuestionsResultSeen().then(() => {
        showScreen("dashboard");
    });
});

answerSentNextBtn.addEventListener("click", () => {
    if (nextAfterAnswerFunction) {
        nextAfterAnswerFunction();
        return;
    }

    showScreen("dashboard");
});

answerSentDashboardBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

document.querySelectorAll(".history-mode-card").forEach((card) => {
    card.addEventListener("click", () => {
        const mode = card.dataset.historyMode;
        openHistoryMode(mode);
    });
});

backToHistoryBtn.addEventListener("click", () => {
    showScreen("history");
});

backToHistoryDetailBtn.addEventListener("click", () => {
    showScreen("historyDetail");
});

// ====================
// BARRE FLOTTANTE
// ====================

notebookEditor.addEventListener("focus", () => {
    showEditorToolbar();
});

document.addEventListener("click", (event) => {
    const toolbar = document.querySelector(".editor-toolbar");

    if (!toolbar) return;

    const clickedInEditor =
        notebookEditor.contains(event.target);

    const clickedInToolbar =
        toolbar.contains(event.target);

    if (clickedInEditor || clickedInToolbar) {
        showEditorToolbar();
    } else {
        hideEditorToolbar();
    }
});

function showEditorToolbar() {
    const toolbar = document.querySelector(".editor-toolbar");
    toolbar.classList.add("visible");
    updateEditorToolbarPosition();
}

function hideEditorToolbar() {
    const toolbar = document.querySelector(".editor-toolbar");
    toolbar.classList.remove("visible");
}

function updateEditorToolbarPosition() {
    const toolbar = document.querySelector(".editor-toolbar");

    if (!toolbar.classList.contains("visible")) {
        return;
    }

    if (window.visualViewport) {
        const keyboardHeight =
            window.innerHeight -
            window.visualViewport.height -
            window.visualViewport.offsetTop;

        toolbar.style.bottom =
            Math.max(keyboardHeight + 8, 12) + "px";
    }
}

if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateEditorToolbarPosition);
    window.visualViewport.addEventListener("scroll", updateEditorToolbarPosition);
}

document.querySelectorAll(".editor-toolbar button").forEach((button) => {
    button.addEventListener("mousedown", (e) => {
        e.preventDefault();
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

                    card.addEventListener("click", () => {
                        openNotebook(notebookId, notebook);
                    });

                    notebooksGrid.appendChild(card);
                });
        });
}

function openNotebook(notebookId, notebook) {
    currentNotebookId = notebookId;
    currentNotebookData = notebook;

    openedNotebookTitle.textContent =
        (notebook.emoji || "📝") + " " + notebook.title;

    loadNotebookContent();
    showScreen("notebook");
}

notebookEditor.addEventListener("input", () => {
    clearTimeout(saveNotebookTimeout);

    saveNotebookTimeout = setTimeout(() => {
        saveNotebookContent();
    }, 700);
});

function saveNotebookContent() {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId +
            "/contentHtml"
        )
        .set(notebookEditor.innerHTML);
}

function loadNotebookContent() {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId +
            "/contentHtml"
        )
        .once("value")
        .then((snapshot) => {
            const content = snapshot.val();

            notebookEditor.innerHTML =
                content || "<p>Écris ici...</p>";

            restoreCheckboxes();
        });
}

function restoreCheckboxes() {
    notebookEditor.querySelectorAll(".checkbox-line").forEach((line) => {
        const checkbox = line.querySelector(".fake-checkbox");

        if (!checkbox) return;

        checkbox.setAttribute("contenteditable", "false");

        if (checkbox.textContent.trim() === "☑") {
            line.classList.add("checked-line");
        } else {
            line.classList.remove("checked-line");
        }
    });
}

function runEditorCommand(command, value = null) {
    notebookEditor.focus();
    document.execCommand(command, false, value);
    saveNotebookContent();
    keepEditorToolbarOpen();
}

function keepEditorToolbarOpen() {
    setTimeout(() => {
        notebookEditor.focus();
        showEditorToolbar();
    }, 50);
}

function getCurrentBlock() {
    const selection = window.getSelection();

    if (!selection.rangeCount) {
        return null;
    }

    let node = selection.anchorNode;

    if (node.nodeType === Node.TEXT_NODE) {
        node = node.parentElement;
    }

    return node.closest("p, div");
}

function normalizeCheckboxLines() {
    const lines = notebookEditor.querySelectorAll("p, div");

    lines.forEach((line) => {
        const text = line.textContent.trim();

        if (text.startsWith("☑")) {
            line.classList.add("checked-line");
        } else {
            line.classList.remove("checked-line");
        }
    });
}

async function loadGuessQuestionsData() {
    const response = await fetch("data/guess-my-answer.json");
    const data = await response.json();

    guessQuestions = data;

    console.log("Questions Devine ma réponse chargées :", guessQuestions);
}

function getRandomGuessQuestion() {
    return getRandomItem(guessQuestions);
}

function displayGuessChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingGuessAnswers = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingGuessPredictions = challengeArray.filter((challenge) => {
        return (
            challenge.status === "predicting" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            (!challenge.predictions || !challenge.predictions[currentUser.uid])
        );
    });

    pendingGuessValidations = challengeArray.filter((challenge) => {
        if (challenge.status !== "predicting") return false;
        if (!challenge.answers || !challenge.predictions) return false;

        const partnerPrediction = Object.values(challenge.predictions).find(
            (prediction) => prediction.uid !== currentUser.uid
        );

        return (
            challenge.answers[currentUser.uid] &&
            partnerPrediction &&
            (!challenge.validations || !challenge.validations[currentUser.uid])
        );
    });

    pendingGuessResults = challengeArray.filter((challenge) => {
        if (challenge.status !== "completed") return false;
        if (!challenge.answers || !challenge.predictions || !challenge.validations) return false;

        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.answers[currentUser.uid] &&
            challenge.predictions[currentUser.uid] &&
            challenge.validations[currentUser.uid] &&
            !seenByMe
        );
    });

    
    updateActivityBox();
}

function startPendingGuessAnswer() {
    const challenge =
        pendingGuessAnswers[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGuessId = challenge.questionId;

    currentGuessQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    guessQuestionText.textContent = challenge.question;
    guessAnswerInput.value = "";

    guessAnswerTitle.textContent = "Écris ta réponse";

    showScreen("guessAnswer");
}

function startPendingGuessPrediction() {
    const challenge =
        pendingGuessPredictions[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGuessId = challenge.questionId;

    currentGuessQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    guessPredictQuestionText.textContent =
        challenge.question;

    guessPredictionInput.value = "";

guessPredictTitle.textContent =
    "Écris la réponse de " + getPartnerPseudo();

    showScreen("guessPredict");
}

function startPendingGuessValidation() {
    const challenge =
        pendingGuessValidations[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGuessId = challenge.questionId;

    currentGuessQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerPrediction =
        Object.values(challenge.predictions)
            .find((prediction) => {
                return prediction.uid !== currentUser.uid;
            });

    guessValidationQuestion.textContent =
        challenge.question;

    myRealGuessAnswer.textContent =
        myAnswer.answer;

    partnerPredictionAboutMe.textContent =
        partnerPrediction.prediction;

    showScreen("guessValidation");
}

function saveGuessValidation(result) {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            currentGuessId +
            "/validations/" +
            currentUser.uid
        )
        .set({
            uid: currentUser.uid,
            result: result,
            createdAt: Date.now()
        })
        .then(() => {
            alert("Validation enregistrée 🌵");
            showScreen("dashboard");
        });
}

function showPendingGuessResult() {
    const challenge =
        pendingGuessResults[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray = Object.values(challenge.answers);
    const predictionsArray = Object.values(challenge.predictions);
    const validationsArray = Object.values(challenge.validations);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const myPrediction =
        challenge.predictions[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    const myValidation =
        challenge.validations[currentUser.uid];

    const partnerValidation =
        validationsArray.find((validation) => {
            return validation.uid !== currentUser.uid;
        });

    const myScore = getGuessValidationScore(myValidation.result);
    const partnerScore = getGuessValidationScore(partnerValidation.result);

    const finalScore =
        Math.round(((myScore + partnerScore) / 2) * 100);

    guessResultQuestion.textContent = challenge.question;
    guessResultScore.textContent = finalScore + "%";

    if (finalScore >= 80) {
        guessResultLabel.textContent = "Vous vous connaissez très bien 🌵";
    } else if (finalScore >= 50) {
        guessResultLabel.textContent = "Il y a de l’idée 💚";
    } else {
        guessResultLabel.textContent = "Bon... il faut encore enquêter 🕵️‍♀️";
    }

    guessMyAnswerResult.textContent =
        myAnswer.answer;

    guessMyPredictionResult.textContent =
        myPrediction.prediction;

    guessPartnerAnswerResult.textContent =
        partnerAnswer.answer;

    guessValidationResult.textContent =
        "Toi : " +
        myValidation.result +
        " / Partenaire : " +
        partnerValidation.result;

    showScreen("guessResult");
}

function getGuessValidationScore(result) {
    if (result === "VRAI") return 1;
    if (result === "BOF") return 0.5;
    return 0;
}

function updateActivityBox() {
    activityList.innerHTML = "";

    let hasActivities = false;

    if (pendingRankingResults.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingRankingResults.length + " résultat(s) Classements";

    item.addEventListener("click", () => {
        currentPendingRankingResultIndex = 0;
        showPendingRankingResult();
    });

    activityList.appendChild(item);
}

    if (pendingRankingChallenges.length > 0) {
        hasActivities = true;

        const item = document.createElement("p");
        item.classList.add("mode-notification");
        item.textContent =
            "💚 " + pendingRankingChallenges.length + " classement(s) t’attendent";

        item.addEventListener("click", () => {
            isPlayingPendingChallenges = true;
            currentPendingChallengeIndex = 0;
            startPendingRankingChallenge();
        });

        activityList.appendChild(item);
    }

    if (pendingGuessAnswers.length > 0) {
        hasActivities = true;

        const item = document.createElement("p");
        item.classList.add("mode-notification");
        item.textContent =
            "💚 " + pendingGuessAnswers.length + " question(s) Devine ma réponse";

        item.addEventListener("click", () => {
            currentPendingGuessIndex = 0;
            startPendingGuessAnswer();
        });

        activityList.appendChild(item);
    }

    if (pendingGuessPredictions.length > 0) {
        hasActivities = true;

        const item = document.createElement("p");
        item.classList.add("mode-notification");
        item.textContent =
            "💚 " + pendingGuessPredictions.length + " prédiction(s) à faire";

        item.addEventListener("click", () => {
            currentPendingGuessIndex = 0;
            startPendingGuessPrediction();
        });

        activityList.appendChild(item);
    }

    if (pendingGuessValidations.length > 0) {
        hasActivities = true;

        const item = document.createElement("p");
        item.classList.add("mode-notification");
        item.textContent =
            "💚 " + pendingGuessValidations.length + " validation(s) à faire";

        item.addEventListener("click", () => {
            currentPendingGuessIndex = 0;
            startPendingGuessValidation();
        });

        activityList.appendChild(item);
    }

    if (pendingGuessResults.length > 0) {
        hasActivities = true;

        const item = document.createElement("p");
        item.classList.add("mode-notification");
        item.textContent =
            item.textContent =
    "💭 " + pendingGuessResults.length + " résultat(s) Devine ma réponse";

        item.addEventListener("click", () => {
            currentPendingGuessIndex = 0;
            showPendingGuessResult();
        });

        activityList.appendChild(item);
    }

    if (pendingLikelyChallenges.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingLikelyChallenges.length + " question(s) Qui est le plus susceptible";

    item.addEventListener("click", () => {
        currentPendingLikelyIndex = 0;
        startPendingLikelyChallenge();
    });

    activityList.appendChild(item);
}

if (pendingLikelyResults.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingLikelyResults.length + " résultat(s) Qui est le plus susceptible";

    item.addEventListener("click", () => {
        currentPendingLikelyIndex = 0;
        showPendingLikelyResult();
    });

    activityList.appendChild(item);
}

if (pendingOkChallenges.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingOkChallenges.length + " question(s) OK ou Pas OK";

    item.addEventListener("click", () => {
        currentPendingOkIndex = 0;
        startPendingOkChallenge();
    });

    activityList.appendChild(item);
}

if (pendingOkResults.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingOkResults.length + " résultat(s) OK ou Pas OK";

    item.addEventListener("click", () => {
        currentPendingOkIndex = 0;
        showPendingOkResult();
    });

    activityList.appendChild(item);
}

if (pendingGreenFlagChallenges.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingGreenFlagChallenges.length + " question(s) Green Flag / Red Flag";

    item.addEventListener("click", () => {
        currentPendingGreenFlagIndex = 0;
        startPendingGreenFlagChallenge();
    });

    activityList.appendChild(item);
}

if (pendingGreenFlagResults.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💚 " + pendingGreenFlagResults.length + " résultat(s) Green Flag / Red Flag";

    item.addEventListener("click", () => {
        currentPendingGreenFlagIndex = 0;
        showPendingGreenFlagResult();
    });

    activityList.appendChild(item);
}

if (pendingPrincessChallenges.length > 0) {

    hasActivities = true;

    const item =
        document.createElement("p");

    item.classList.add(
        "mode-notification"
    );

    item.textContent =
        "👑 " +
        pendingPrincessChallenges.length +
        " question(s) Princess Treatment";

    item.addEventListener("click", () => {

        currentPendingPrincessIndex = 0;

        startPendingPrincessChallenge();
    });

    activityList.appendChild(item);
}

if (pendingPrincessResults.length > 0) {

    hasActivities = true;

    const item =
        document.createElement("p");

    item.classList.add(
        "mode-notification"
    );

    item.textContent =
        "👑 " +
        pendingPrincessResults.length +
        " résultat(s) Princess Treatment";

    item.addEventListener("click", () => {

        currentPendingPrincessIndex = 0;

        showPendingPrincessResult();
    });

    activityList.appendChild(item);
}

if (pendingQuestionsChallenges.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💬 " + pendingQuestionsChallenges.length + " question(s) à répondre";

    item.addEventListener("click", () => {
        currentPendingQuestionsIndex = 0;
        startPendingQuestionsChallenge();
    });

    activityList.appendChild(item);
}

if (pendingQuestionsResults.length > 0) {
    hasActivities = true;

    const item = document.createElement("p");
    item.classList.add("mode-notification");
    item.textContent =
        "💬 " + pendingQuestionsResults.length + " réponse(s) à découvrir";

    item.addEventListener("click", () => {
        currentPendingQuestionsIndex = 0;
        showPendingQuestionsResult();
    });

    activityList.appendChild(item);
}

    activityBox.style.display = hasActivities ? "block" : "none";
}

function markCurrentGuessResultSeen() {
    const challenge = pendingGuessResults[currentPendingGuessIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function startLikelyGame() {
    if (!likelyQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    const randomQuestion =
        likelyQuestions[
            Math.floor(
                Math.random() * likelyQuestions.length
            )
        ];

    currentLikelyQuestion = randomQuestion;
    currentLikelyId = randomQuestion.id;

    likelyQuestionText.textContent =
        randomQuestion.question;

    showScreen("likely");
}

function saveLikelyAnswer(answer) {
    if (!currentLikelyQuestion) {
        alert("Question introuvable 🌵");
        return;
    }

    currentLikelyId = currentLikelyQuestion.id;

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/likelyChallenges/" +
            currentLikelyId
        )
        .update({
            questionId: currentLikelyQuestion.id,
            question: currentLikelyQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref(
                    "spaces/" +
                    currentSpaceCode +
                    "/likelyChallenges/" +
                    currentLikelyId +
                    "/answers/" +
                    currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
    showToast("🌵 Réponse enregistrée");

    showAnswerSentScreen(() => {
        startLikelyGame();
    });
});
}

function listenToLikelyChallenges() {
    database
        .ref("spaces/" + currentSpaceCode + "/likelyChallenges")
        .on("value", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/likelyChallenges/" +
                            id
                        )
                        .update({
                            status: "completed",
                            completedAt: Date.now()
                        });
                }
            });

            displayLikelyChallenges(challenges);
        });
}

function displayLikelyChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingLikelyChallenges = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingLikelyResults = challengeArray.filter((challenge) => {
        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function startPendingLikelyChallenge() {
    const challenge =
        pendingLikelyChallenges[currentPendingLikelyIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentLikelyId = challenge.questionId;

    currentLikelyQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    likelyQuestionText.textContent =
        challenge.question;

    showScreen("likely");
}





function startPendingLikelyChallenge() {
    const challenge =
        pendingLikelyChallenges[currentPendingLikelyIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentLikelyId = challenge.questionId;

    currentLikelyQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    likelyQuestionText.textContent = challenge.question;

    showScreen("likely");
}

function showPendingLikelyResult() {
    const challenge =
        pendingLikelyResults[currentPendingLikelyIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray =
        Object.values(challenge.answers || {});

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    likelyResultQuestion.textContent =
        challenge.question;

    likelyMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    likelyPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    if (
        myAnswer &&
        partnerAnswer &&
        myAnswer.answer === partnerAnswer.answer
    ) {
        likelyVerdictEmoji.textContent = "💚";
        likelyVerdictText.textContent =
            "Vous êtes totalement d’accord.";
    } else {
        likelyVerdictEmoji.textContent = "👀";
        likelyVerdictText.textContent =
            "Vous n’avez pas désigné la même personne.";
    }

    showScreen("likelyResult");
}

function markCurrentLikelyResultSeen() {
    const challenge =
        pendingLikelyResults[currentPendingLikelyIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/likelyChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function startOkGame() {
    if (!okQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentOkQuestion =
        okQuestions[Math.floor(Math.random() * okQuestions.length)];

    currentOkId = currentOkQuestion.id;

    okQuestionText.textContent =
        currentOkQuestion.question;

    showScreen("ok");
}

function saveOkAnswer(answer) {
    if (!currentOkQuestion) {
        alert("Question introuvable 🌵");
        return;
    }

    currentOkId = currentOkQuestion.id;

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/okChallenges/" +
            currentOkId
        )
        .update({
            questionId: currentOkQuestion.id,
            question: currentOkQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref(
                    "spaces/" +
                    currentSpaceCode +
                    "/okChallenges/" +
                    currentOkId +
                    "/answers/" +
                    currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
    showToast("🌵 Réponse enregistrée");

    showAnswerSentScreen(() => {
        startOkGame();
    });
});
}

function listenToOkChallenges() {
    database
        .ref("spaces/" + currentSpaceCode + "/okChallenges")
        .on("value", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/okChallenges/" +
                            id
                        )
                        .update({
                            status: "completed",
                            completedAt: Date.now()
                        });
                }
            });

            displayOkChallenges(challenges);
        });
}

function displayOkChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingOkChallenges = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingOkResults = challengeArray.filter((challenge) => {
        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function startPendingOkChallenge() {
    const challenge =
        pendingOkChallenges[currentPendingOkIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentOkId = challenge.questionId;

    currentOkQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    okQuestionText.textContent = challenge.question;

    showScreen("ok");
}

function showPendingOkResult() {
    const challenge =
        pendingOkResults[currentPendingOkIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray = Object.values(challenge.answers);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    okResultQuestion.textContent = challenge.question;

    okMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    okPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    if (
        myAnswer &&
        partnerAnswer &&
        myAnswer.answer === partnerAnswer.answer
    ) {
        okVerdictEmoji.textContent = "💚";
        okVerdictText.textContent =
            "Vous êtes d’accord.";
    } else {
        okVerdictEmoji.textContent = "👀";
        okVerdictText.textContent =
            "Vous n’avez pas la même limite.";
    }

    showScreen("okResult");
}

function markCurrentOkResultSeen() {
    const challenge =
        pendingOkResults[currentPendingOkIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/okChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

async function loadGreenFlagQuestionsData() {
    const response = await fetch("data/green-flag-red-flag.json");
    greenFlagQuestions = await response.json();

    console.log("Questions Green Flag chargées :", greenFlagQuestions);
}

loadGreenFlagQuestionsData();

function startGreenFlagGame() {
    if (!greenFlagQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentGreenFlagQuestion =
        greenFlagQuestions[
            Math.floor(Math.random() * greenFlagQuestions.length)
        ];

    currentGreenFlagId = currentGreenFlagQuestion.id;

    greenFlagQuestionText.textContent =
        currentGreenFlagQuestion.question;

    showScreen("greenFlag");
}

function saveGreenFlagAnswer(answer) {
    if (!currentGreenFlagQuestion) {
        alert("Question introuvable 🌵");
        return;
    }

    currentGreenFlagId = currentGreenFlagQuestion.id;

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/greenFlagChallenges/" +
            currentGreenFlagId
        )
        .update({
            questionId: currentGreenFlagQuestion.id,
            question: currentGreenFlagQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref(
                    "spaces/" +
                    currentSpaceCode +
                    "/greenFlagChallenges/" +
                    currentGreenFlagId +
                    "/answers/" +
                    currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
    showToast("🌵 Réponse enregistrée");

    showAnswerSentScreen(() => {
        startGreenFlagGame();
    });
});
}

function listenToGreenFlagChallenges() {
    database
        .ref("spaces/" + currentSpaceCode + "/greenFlagChallenges")
        .on("value", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/greenFlagChallenges/" +
                            id
                        )
                        .update({
                            status: "completed",
                            completedAt: Date.now()
                        });
                }
            });

            displayGreenFlagChallenges(challenges);
        });
}

function displayGreenFlagChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingGreenFlagChallenges = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingGreenFlagResults = challengeArray.filter((challenge) => {
        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function startPendingGreenFlagChallenge() {
    const challenge =
        pendingGreenFlagChallenges[currentPendingGreenFlagIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGreenFlagId = challenge.questionId;

    currentGreenFlagQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    greenFlagQuestionText.textContent =
        challenge.question;

    showScreen("greenFlag");
}

function showPendingGreenFlagResult() {
    const challenge =
        pendingGreenFlagResults[currentPendingGreenFlagIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray =
        Object.values(challenge.answers);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    greenFlagResultQuestion.textContent =
        challenge.question;

    greenFlagMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    greenFlagPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    if (
        myAnswer &&
        partnerAnswer &&
        myAnswer.answer === partnerAnswer.answer
    ) {
        greenFlagVerdictEmoji.textContent = "💚";
        greenFlagVerdictText.textContent =
            "Vous voyez les choses de la même façon.";
    } else {
        greenFlagVerdictEmoji.textContent = "👀";
        greenFlagVerdictText.textContent =
            "Vous n’avez pas la même lecture de ce comportement.";
    }

    showScreen("greenFlagResult");
}

function markCurrentGreenFlagResultSeen() {
    const challenge =
        pendingGreenFlagResults[currentPendingGreenFlagIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/greenFlagChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

async function loadPrincessQuestionsData() {
    const response = await fetch("data/princess-treatment.json");
    princessQuestions = await response.json();

    console.log("Questions Princess Treatment chargées :", princessQuestions);
}

loadPrincessQuestionsData();

async function startPrincessGame() {
    if (!princessQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentPrincessQuestion =
        princessQuestions[
            Math.floor(
                Math.random() * princessQuestions.length
            )
        ];

    currentPrincessId =
        currentPrincessQuestion.id;

    princessQuestionText.textContent =
        currentPrincessQuestion.question;

    showScreen("princess");
}

function savePrincessAnswer(answer) {
    if (!currentPrincessQuestion) {
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/princessChallenges/" +
            currentPrincessId
        )
        .update({
            questionId: currentPrincessQuestion.id,
            question: currentPrincessQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref(
                    "spaces/" +
                    currentSpaceCode +
                    "/princessChallenges/" +
                    currentPrincessId +
                    "/answers/" +
                    currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            showToast("👑 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startPrincessGame();
            });
        });
}

function listenToPrincessChallenges() {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/princessChallenges"
        )
        .on("value", (snapshot) => {

            const challenges =
                snapshot.val() || {};

            Object.entries(challenges)
                .forEach(([id, challenge]) => {

                const answers =
                    challenge.answers || {};

                if (
                    Object.keys(answers).length >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/princessChallenges/" +
                            id
                        )
                        .update({
                            status: "completed"
                        });
                }
            });

            displayPrincessChallenges(
                challenges
            );
        });
}

function displayPrincessChallenges(
    challenges
) {
    const challengeArray =
        Object.values(challenges || {});

    pendingPrincessChallenges =
        challengeArray.filter(
            (challenge) => {

            return (
                challenge.status ===
                    "answering" &&
                challenge.answers &&
                !challenge.answers[
                    currentUser.uid
                ] &&
                Object.keys(
                    challenge.answers
                ).some(
                    uid =>
                    uid !== currentUser.uid
                )
            );
        });

    pendingPrincessResults =
        challengeArray.filter(
            (challenge) => {

            const seen =
                challenge.seenBy &&
                challenge.seenBy[
                    currentUser.uid
                ];

            return (
                challenge.status ===
                    "completed" &&
                challenge.answers &&
                challenge.answers[
                    currentUser.uid
                ] &&
                !seen
            );
        });

    updateActivityBox();
}

function startPendingPrincessChallenge() {

    const challenge =
        pendingPrincessChallenges[
            currentPendingPrincessIndex
        ];

    if (!challenge) {

        showScreen(
            "dashboard"
        );

        return;
    }

    currentPrincessId =
        challenge.questionId;

    currentPrincessQuestion = {

        id:
            challenge.questionId,

        question:
            challenge.question
    };

    princessQuestionText.textContent =
        challenge.question;

    showScreen(
        "princess"
    );
}

function showPendingPrincessResult() {

    const challenge =
        pendingPrincessResults[
            currentPendingPrincessIndex
        ];

    if (!challenge) {

        showScreen(
            "dashboard"
        );

        return;
    }

    const answersArray =
        Object.values(
            challenge.answers
        );

    const myAnswer =
        challenge.answers[
            currentUser.uid
        ];

    const partnerAnswer =
        answersArray.find(
            answer =>
                answer.uid !==
                currentUser.uid
        );

    princessResultQuestion.textContent =
        challenge.question;

    princessMyAnswer.textContent =
        myAnswer
            ? myAnswer.answer
            : "Pas de réponse";

    princessPartnerAnswer.textContent =
        partnerAnswer
            ? partnerAnswer.answer
            : "Pas encore répondu";

    if (
        myAnswer &&
        partnerAnswer &&
        myAnswer.answer ===
        partnerAnswer.answer
    ) {

        princessVerdictEmoji.textContent =
            "👑";

        princessVerdictText.textContent =
            "Vous êtes totalement d’accord.";
    }
    else {

        princessVerdictEmoji.textContent =
            "👀";

        princessVerdictText.textContent =
            "Vous n’avez pas la même vision du traitement de princesse.";
    }

    showScreen(
        "princessResult"
    );
}

function markCurrentPrincessResultSeen() {

    const challenge =
        pendingPrincessResults[
            currentPendingPrincessIndex
        ];

    if (!challenge) {

        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/princessChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

async function loadCoupleQuestionsData() {
    const response = await fetch("data/questions.json");
    coupleQuestions = await response.json();

    console.log("Questions chargées :", coupleQuestions);
}

loadCoupleQuestionsData();

function startQuestionsGame() {
    if (!coupleQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentCoupleQuestion =
        coupleQuestions[
            Math.floor(Math.random() * coupleQuestions.length)
        ];

    currentCoupleQuestionId =
        currentCoupleQuestion.id;

    questionsQuestionText.textContent =
        currentCoupleQuestion.question;

    questionsAnswerInput.value = "";

    showScreen("questions");
}

function saveQuestionsAnswer() {
    const answer =
        questionsAnswerInput.value.trim();

    if (answer === "") {
        alert("Écris ta réponse 🌵");
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/questionsChallenges/" +
            currentCoupleQuestionId
        )
        .update({
            questionId: currentCoupleQuestion.id,
            question: currentCoupleQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref(
                    "spaces/" +
                    currentSpaceCode +
                    "/questionsChallenges/" +
                    currentCoupleQuestionId +
                    "/answers/" +
                    currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            showScreen("dashboard");
        });
}

function listenToQuestionsChallenges() {
    database
        .ref("spaces/" + currentSpaceCode + "/questionsChallenges")
        .on("value", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};

                if (
                    Object.keys(answers).length >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/questionsChallenges/" +
                            id
                        )
                        .update({
                            status: "completed",
                            completedAt: Date.now()
                        });
                }
            });

            displayQuestionsChallenges(challenges);
        });
}

function displayQuestionsChallenges(challenges) {
    const challengeArray =
        Object.values(challenges || {});

    pendingQuestionsChallenges =
        challengeArray.filter((challenge) => {
            return (
                challenge.status === "answering" &&
                challenge.answers &&
                !challenge.answers[currentUser.uid] &&
                Object.keys(challenge.answers).some((uid) => {
                    return uid !== currentUser.uid;
                })
            );
        });

    pendingQuestionsResults =
        challengeArray.filter((challenge) => {
            const seenByMe =
                challenge.seenBy &&
                challenge.seenBy[currentUser.uid];

            return (
                challenge.status === "completed" &&
                challenge.answers &&
                challenge.answers[currentUser.uid] &&
                !seenByMe
            );
        });

    updateActivityBox();
}

function startPendingQuestionsChallenge() {
    const challenge =
        pendingQuestionsChallenges[currentPendingQuestionsIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentCoupleQuestionId = challenge.questionId;

    currentCoupleQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    questionsQuestionText.textContent = challenge.question;
    questionsAnswerInput.value = "";

    showScreen("questions");
}

function showPendingQuestionsResult() {
    const challenge =
        pendingQuestionsResults[currentPendingQuestionsIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray = Object.values(challenge.answers);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    questionsResultQuestion.textContent =
        challenge.question;

    questionsMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    questionsPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    showScreen("questionsResult");
}

function markCurrentQuestionsResultSeen() {
    const challenge =
        pendingQuestionsResults[currentPendingQuestionsIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/questionsChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function showToast(message) {
    toastMessage.textContent = message;
    toastMessage.classList.add("visible");

    setTimeout(() => {
        toastMessage.classList.remove("visible");
    }, 1800);
}

function showPendingRankingResult() {
    const challenge =
        pendingRankingResults[currentPendingRankingResultIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray =
        Object.values(challenge.answers);

    const myAnswerData =
        challenge.answers[currentUser.uid];

    const partnerAnswerData =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    if (!myAnswerData || !partnerAnswerData) {
        showScreen("dashboard");
        return;
    }

    showRankingCompatibility(
        challenge,
        myAnswerData,
        partnerAnswerData
    );
}

function markCurrentRankingResultSeen() {
    const challenge =
        pendingRankingResults[currentPendingRankingResultIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/rankingChallenges/" +
            challenge.rankingId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function showAnswerSentScreen(nextFunction) {
    nextAfterAnswerFunction = nextFunction;
    showScreen("answerSent");
}

function openHistoryMode(mode) {
        if (mode === "stats") {
        openRelationStats();
        return;
    }
    historyDetailList.innerHTML = "";

    currentHistoryMode = mode;
    currentHistoryItems = [];

    const config = {
        ranking: {
            title: "🌵 Classements",
            path: "rankingChallenges"
        },
        guess: {
            title: "💭 Devine ma réponse",
            path: "guessAnswers"
        },
        questions: {
            title: "💬 Questions",
            path: "questionsChallenges"
        },
        likely: {
            title: "😂 Qui est le plus susceptible",
            path: "likelyChallenges"
        },
        ok: {
            title: "✅ OK ou Pas OK",
            path: "okChallenges"
        },
        greenFlag: {
            title: "🚩 Green Flag / Red Flag",
            path: "greenFlagChallenges"
        },
        princess: {
            title: "👑 Princess Treatment",
            path: "princessChallenges"
        }
    };

    const selectedMode = config[mode];

    if (!selectedMode) {
        return;
    }

    historyDetailTitle.textContent = selectedMode.title;

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/" +
            selectedMode.path
        )
        .once("value")
        .then((snapshot) => {
            const data = snapshot.val() || {};

            currentHistoryItems = Object.values(data)
                .filter((item) => {
                    return item.status === "completed";
                })
                .sort((a, b) => {
                    return (b.completedAt || b.createdAt || 0) -
                        (a.completedAt || a.createdAt || 0);
                });

            if (currentHistoryItems.length === 0) {
                historyDetailList.innerHTML =
                    '<p class="empty-text">Aucun souvenir pour ce mode 🌵</p>';

                showScreen("historyDetail");
                return;
            }

            currentHistoryItems.forEach((item, index) => {
                const card = createHistoryCard(mode, item);

                card.style.cursor = "pointer";

                card.addEventListener("click", () => {
                    openHistoryItem(index);
                });

                historyDetailList.appendChild(card);
            });

            showScreen("historyDetail");
        });
}

function createHistoryCard(mode, item) {
    const card = document.createElement("div");
    card.classList.add("history-card");

    const title = document.createElement("h3");
    title.textContent =
        item.title ||
        item.question ||
        "Souvenir";

    const date = document.createElement("small");
    date.classList.add("history-date");
    date.textContent =
        formatHistoryDate(item.completedAt || item.createdAt);

    card.appendChild(title);
    card.appendChild(date);

    if (mode === "ranking") {
        const score = document.createElement("span");
        score.classList.add("history-score");

        score.textContent =
            getCompatibilityHearts(item.compatibility || 0) +
            " " +
            (item.compatibility || 0) +
            "%";

        card.appendChild(score);
        return card;
    }

    if (item.answers) {
        const answersArray = Object.values(item.answers);

        answersArray.forEach((answer) => {
            const p = document.createElement("p");

            const label =
                answer.uid === currentUser.uid
                    ? "Toi"
                    : "Partenaire";

            p.innerHTML =
                "<strong>" +
                label +
                " :</strong> " +
                (answer.answer || "Pas de réponse");

            card.appendChild(p);
        });
    }

    return card;
}

function openHistoryItem(index) {
    const item = currentHistoryItems[index];

    if (!item) {
        return;
    }

    historyItemContent.innerHTML = "";

    historyItemTitle.textContent =
        item.title ||
        item.question ||
        "📚 Souvenir";

    if (currentHistoryMode === "ranking") {
        renderRankingHistoryItem(item);
    } else {
        renderSimpleHistoryItem(item);
    }

    showScreen("historyItem");
}

function renderRankingHistoryItem(item) {
    const date = document.createElement("p");
    date.classList.add("history-date");
    date.textContent =
        formatHistoryDate(item.completedAt || item.createdAt);

    historyItemContent.appendChild(date);

    const scoreBox = document.createElement("div");
    scoreBox.classList.add("compatibility-score-box");

    scoreBox.innerHTML =
        "<strong>" +
        (item.compatibility || 0) +
        "%</strong>" +
        "<p>" +
        getCompatibilityHearts(item.compatibility || 0) +
        "</p>";

    historyItemContent.appendChild(scoreBox);

    const answersArray = Object.values(item.answers || {});

    answersArray.forEach((answerData) => {
        const box = document.createElement("div");
        box.classList.add("comparison-box");

        const title = document.createElement("h3");
        title.textContent =
            answerData.uid === currentUser.uid
                ? "Toi"
                : "Partenaire";

        const list = document.createElement("ol");

        (answerData.answer || []).forEach((rankedItem) => {
            const li = document.createElement("li");
            li.textContent = rankedItem;
            list.appendChild(li);
        });

        box.appendChild(title);
        box.appendChild(list);

        historyItemContent.appendChild(box);
    });
}

function renderSimpleHistoryItem(item) {
    const date = document.createElement("p");
    date.classList.add("history-date");
    date.textContent =
        formatHistoryDate(item.completedAt || item.createdAt);

    historyItemContent.appendChild(date);

    const answersArray =
        Object.values(item.answers || {});

    answersArray.forEach((answerData) => {
        const box = document.createElement("div");
        box.classList.add("comparison-box");

        const title = document.createElement("h3");
        title.textContent =
            answerData.uid === currentUser.uid
                ? "Toi"
                : "Partenaire";

        const answer = document.createElement("p");
        answer.textContent =
            answerData.answer || "Pas de réponse";

        box.appendChild(title);
        box.appendChild(answer);

        historyItemContent.appendChild(box);
    });

    if (currentHistoryMode === "guess" && item.predictions) {
        const predictionTitle = document.createElement("h3");
        predictionTitle.textContent = "Prédictions";
        historyItemContent.appendChild(predictionTitle);

        Object.values(item.predictions).forEach((predictionData) => {
            const box = document.createElement("div");
            box.classList.add("comparison-box");

            const title = document.createElement("h3");
            title.textContent =
                predictionData.uid === currentUser.uid
                    ? "Ta prédiction"
                    : "Prédiction partenaire";

            const prediction = document.createElement("p");
            prediction.textContent =
                predictionData.prediction || "Pas de prédiction";

            box.appendChild(title);
            box.appendChild(prediction);

            historyItemContent.appendChild(box);
        });
    }
}

function formatHistoryDate(timestamp) {
    if (!timestamp) {
        return "Date inconnue";
    }

    return new Date(timestamp).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

function openRelationStats() {
    historyDetailTitle.textContent = "📊 Notre relation";
    historyDetailList.innerHTML = "";

    const modes = [
        { label: "🌵 Classements", path: "rankingChallenges" },
        { label: "💭 Devine ma réponse", path: "guessAnswers" },
        { label: "💬 Questions", path: "questionsChallenges" },
        { label: "😂 Qui est le plus susceptible", path: "likelyChallenges" },
        { label: "✅ OK ou Pas OK", path: "okChallenges" },
        { label: "🚩 Green Flag / Red Flag", path: "greenFlagChallenges" },
        { label: "👑 Princess Treatment", path: "princessChallenges" }
    ];

    Promise.all(
        modes.map((mode) => {
            return database
                .ref("spaces/" + currentSpaceCode + "/" + mode.path)
                .once("value")
                .then((snapshot) => {
                    return {
                        label: mode.label,
                        items: Object.values(snapshot.val() || {})
                    };
                });
        })
    ).then((results) => {
        let totalSouvenirs = 0;
        let totalCompatibility = 0;
        let compatibilityCount = 0;
        let bestCompatibility = 0;

        let favoriteMode = "Aucun pour le moment";
        let favoriteModeCount = 0;

        let firstMemoryDate = null;
        let lastMemoryDate = null;

        results.forEach((modeResult) => {
            const completedItems = modeResult.items.filter((item) => {
                return item.status === "completed";
            });

            totalSouvenirs += completedItems.length;

            if (completedItems.length > favoriteModeCount) {
                favoriteModeCount = completedItems.length;
                favoriteMode = modeResult.label;
            }

            completedItems.forEach((item) => {
                const date = item.completedAt || item.createdAt;

                if (date) {
                    if (!firstMemoryDate || date < firstMemoryDate) {
                        firstMemoryDate = date;
                    }

                    if (!lastMemoryDate || date > lastMemoryDate) {
                        lastMemoryDate = date;
                    }
                }

                if (typeof item.compatibility === "number") {
                    totalCompatibility += item.compatibility;
                    compatibilityCount++;
                    bestCompatibility = Math.max(
                        bestCompatibility,
                        item.compatibility
                    );
                }
            });
        });

        const averageCompatibility =
            compatibilityCount > 0
                ? Math.round(totalCompatibility / compatibilityCount)
                : 0;

        addStatCard("📚 Souvenirs créés", totalSouvenirs);
        addStatCard("💚 Compatibilité moyenne", averageCompatibility + "%");
        addStatCard("🏆 Meilleur score", bestCompatibility + "%");
        addStatCard("🎮 Mode préféré", favoriteMode);

        addStatCard(
            "🌱 Premier souvenir",
            firstMemoryDate
                ? formatHistoryDate(firstMemoryDate)
                : "Aucun pour le moment"
        );

        addStatCard(
            "✨ Dernier souvenir",
            lastMemoryDate
                ? formatHistoryDate(lastMemoryDate)
                : "Aucun pour le moment"
        );

        results.forEach((modeResult) => {
            const completedItems = modeResult.items.filter((item) => {
                return item.status === "completed";
            });

            addStatCard(
                modeResult.label,
                completedItems.length + " souvenir(s)"
            );
        });

        showScreen("historyDetail");
    });
}


function addStatCard(label, value) {
    const card = document.createElement("div");
    card.classList.add("history-card");

    const title = document.createElement("h3");
    title.textContent = label;

    const number = document.createElement("p");
    number.textContent = value;
    number.style.fontSize = "1.8rem";
    number.style.fontWeight = "900";

    card.appendChild(title);
    card.appendChild(number);

    historyDetailList.appendChild(card);
}

function getPartnerPseudo() {
    if (!currentSpaceData || !currentUser) {
        return "ton/ta partenaire";
    }

    if (
        currentSpaceData.player1 &&
        currentSpaceData.player1.uid !== currentUser.uid
    ) {
        return currentSpaceData.player1.pseudo || "ton/ta partenaire";
    }

    if (
        currentSpaceData.player2 &&
        currentSpaceData.player2.uid !== currentUser.uid
    ) {
        return currentSpaceData.player2.pseudo || "ton/ta partenaire";
    }

    return "ton/ta partenaire";
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
loadGuessQuestionsData();
loadLikelyQuestionsData();

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

function displayRankingChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingRankingChallenges = challengeArray.filter((challenge) => {
        if (challenge.status === "completed") {
            return false;
        }

        if (!challenge.answers) {
            return false;
        }

        const alreadyAnswered =
            challenge.answers[currentUser.uid];

        const answeredBySomeoneElse =
            Object.keys(challenge.answers).some((uid) => {
                return uid !== currentUser.uid;
            });

        return !alreadyAnswered && answeredBySomeoneElse;
    });

    pendingRankingResults = challengeArray.filter((challenge) => {
    const seenByMe =
        challenge.seenBy &&
        challenge.seenBy[currentUser.uid];

    return (
        challenge.status === "completed" &&
        challenge.answers &&
        challenge.answers[currentUser.uid] &&
        !seenByMe
    );
});

    updateActivityBox();
}

function listenToGuessChallenges() {
    database
        .ref("spaces/" + currentSpaceCode + "/guessAnswers")
        .on("value", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/guessAnswers/" +
                            id +
                            "/status"
                        )
                        .set("predicting");
                }

                const predictions = challenge.predictions || {};
const validations = challenge.validations || {};

if (
    Object.keys(predictions).length >= 2 &&
    Object.keys(validations).length >= 2 &&
    challenge.status !== "completed"
) {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            id
        )
        .update({
            status: "completed",
            completedAt: Date.now()
        });
}

            });

            displayGuessChallenges(challenges);
        });
}