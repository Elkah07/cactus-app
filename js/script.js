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
const themeSettingIcon = document.getElementById("themeSettingIcon");
const themeSettingLabel = document.getElementById("themeSettingLabel");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
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
const gardenSeedsBalance = document.getElementById("gardenSeedsBalance");
const gardenLevelBadge = document.getElementById("gardenLevelBadge");
const gardenPlantedCount = document.getElementById("gardenPlantedCount");
const gardenPlot = document.getElementById("gardenPlot");
const gardenEmptyPlot = document.getElementById("gardenEmptyPlot");
const gardenShopGrid = document.getElementById("gardenShopGrid");

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
const activityKicker = document.getElementById("activityKicker");
const activityIcon = document.getElementById("activityIcon");

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

const statsScreen = document.getElementById("statsScreen");
const backFromStatsBtn = document.getElementById("backFromStatsBtn");
const statsPlayBtn = document.getElementById("statsPlayBtn");
const statsLoadingState = document.getElementById("statsLoadingState");
const statsContent = document.getElementById("statsContent");
const statsHeroMessage = document.getElementById("statsHeroMessage");
const statsHeroSubtitle = document.getElementById("statsHeroSubtitle");
const statsTotalGames = document.getElementById("statsTotalGames");
const statsTotalAnswers = document.getElementById("statsTotalAnswers");
const statsAverageCompatibility = document.getElementById("statsAverageCompatibility");
const statsDaysTogether = document.getElementById("statsDaysTogether");
const statsCompatibilityScore = document.getElementById("statsCompatibilityScore");
const statsCompatibilityBar = document.getElementById("statsCompatibilityBar");
const statsCompatibilityLabel = document.getElementById("statsCompatibilityLabel");
const statsFavoriteMode = document.getElementById("statsFavoriteMode");
const statsModesBreakdown = document.getElementById("statsModesBreakdown");
const statsBestScore = document.getElementById("statsBestScore");
const statsFirstMemory = document.getElementById("statsFirstMemory");
const statsLastMemory = document.getElementById("statsLastMemory");
const statsEmptyState = document.getElementById("statsEmptyState");
const achievementsScreen = document.getElementById("achievementsScreen");
const dashboardAchievementsBtn = document.getElementById("dashboardAchievementsBtn");
const backFromAchievementsBtn = document.getElementById("backFromAchievementsBtn");
const achievementsUnlockedCount = document.getElementById("achievementsUnlockedCount");
const achievementsProgressBar = document.getElementById("achievementsProgressBar");
const achievementsLoadingState = document.getElementById("achievementsLoadingState");
const achievementsGrid = document.getElementById("achievementsGrid");

const guessAnswerTitle =
    document.querySelector("#guessAnswerScreen h1");

const guessPredictTitle =
    document.querySelector("#guessPredictScreen h1");

const compatibilityStat = document.getElementById("compatibilityStat");
const completedGamesStat = document.getElementById("completedGamesStat");

const seedsStat = document.getElementById("seedsStat");
const levelStat = document.getElementById("levelStat");

const storyIntroScreen = document.getElementById("storyIntroScreen");
const storyDateScreen = document.getElementById("storyDateScreen");
const storyMeetingScreen = document.getElementById("storyMeetingScreen");
const storyFirstDateScreen = document.getElementById("storyFirstDateScreen");
const storyNicknamesScreen = document.getElementById("storyNicknamesScreen");
const storySongScreen = document.getElementById("storySongScreen");
const storyDistanceScreen = document.getElementById("storyDistanceScreen");
const storyFinalScreen = document.getElementById("storyFinalScreen");

const startStoryBtn = document.getElementById("startStoryBtn");
const storyDateInput = document.getElementById("storyDateInput");
const saveStoryDateBtn = document.getElementById("saveStoryDateBtn");

const storyMeetingInput = document.getElementById("storyMeetingInput");
const saveStoryMeetingBtn = document.getElementById("saveStoryMeetingBtn");

const storyFirstDateInput = document.getElementById("storyFirstDateInput");
const saveStoryFirstDateBtn = document.getElementById("saveStoryFirstDateBtn");

const storyNicknameMineInput = document.getElementById("storyNicknameMineInput");
const storyNicknamePartnerInput = document.getElementById("storyNicknamePartnerInput");
const saveStoryNicknamesBtn = document.getElementById("saveStoryNicknamesBtn");

const storySongInput = document.getElementById("storySongInput");
const saveStorySongBtn = document.getElementById("saveStorySongBtn");

const storyTogetherBtn = document.getElementById("storyTogetherBtn");
const storyDistanceBtn = document.getElementById("storyDistanceBtn");

const finishStoryBtn = document.getElementById("finishStoryBtn");

const relationshipDaysText =
    document.getElementById("relationshipDaysText");

    const storyPageScreen = document.getElementById("storyPageScreen");
const storyPageContent = document.getElementById("storyPageContent");

const editStoryBtn = document.getElementById("editStoryBtn");
const backFromStoryPageBtn = document.getElementById("backFromStoryPageBtn");

const allGamesScreen = document.getElementById("allGamesScreen");

const openAllGamesBtn = document.getElementById("openAllGamesBtn");
const backFromAllGamesBtn = document.getElementById("backFromAllGamesBtn");

const allRankingBtn = document.getElementById("allRankingBtn");
const allGuessBtn = document.getElementById("allGuessBtn");
const allQuestionsBtn = document.getElementById("allQuestionsBtn");

const dashboardProfileBtn =
    document.getElementById("dashboardProfileBtn");

const dashboardSettingsBtn =
    document.getElementById("dashboardSettingsBtn");

const dashboardSpaceCode =
    document.getElementById("dashboardSpaceCode");

const spaceCodeLabel =
    document.getElementById("spaceCodeLabel");

const rankingCountLabel =
    document.getElementById("rankingCountLabel");

const guessCountLabel =
    document.getElementById("guessCountLabel");

const questionsCountLabel =
    document.getElementById("questionsCountLabel");

const levelHeroStat =
    document.getElementById("levelHeroStat");

const mainCactusImage =
    document.getElementById("mainCactusImage");

const dashboardCactusMessage =
    document.getElementById("dashboardCactusMessage");

const currentXpHero =
    document.getElementById("currentXpHero");

const nextLevelXpHero =
    document.getElementById("nextLevelXpHero");

const cactusXpProgressBar =
    document.getElementById("cactusXpProgressBar");

const compatibilityMiniBar =
    document.getElementById("compatibilityMiniBar");

const seedsMiniBar =
    document.getElementById("seedsMiniBar");

const levelMiniBar =
    document.getElementById("levelMiniBar");

const completedGamesMiniBar =
    document.getElementById("completedGamesMiniBar");

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

const relationStatsModes = [
    {
        key: "ranking",
        label: "Classements",
        icon: "🌵",
        path: "rankingChallenges",
        color: "#66dc91"
    },
    {
        key: "guess",
        label: "Devine ma réponse",
        icon: "💭",
        path: "guessAnswers",
        color: "#ff8e82"
    },
    {
        key: "questions",
        label: "Questions",
        icon: "💬",
        path: "questionsChallenges",
        color: "#ffd45c"
    },
    {
        key: "likely",
        label: "Qui est le plus susceptible",
        icon: "😂",
        path: "likelyChallenges",
        color: "#9be37c"
    },
    {
        key: "ok",
        label: "OK ou Pas OK",
        icon: "✅",
        path: "okChallenges",
        color: "#73d5c6"
    },
    {
        key: "greenFlag",
        label: "Green Flag / Red Flag",
        icon: "🚩",
        path: "greenFlagChallenges",
        color: "#ff7385"
    },
    {
        key: "princess",
        label: "Princess Treatment",
        icon: "👑",
        path: "princessChallenges",
        color: "#d997ff"
    }
];

let lastKnownSeeds = null;
let activeRealtimeSpaceCode = "";
let activeRealtimeSubscriptions = [];


// ====================
// CHARGEMENT DES DONNÉES
// ====================

function stopCurrentSpaceListeners() {
    activeRealtimeSubscriptions.forEach(({ reference, callback }) => {
        reference.off("value", callback);
    });

    activeRealtimeSubscriptions = [];
    activeRealtimeSpaceCode = "";
}

function subscribeToSpaceValue(relativePath, callback) {
    if (!activeRealtimeSpaceCode) {
        return;
    }

    const completePath = [
        "spaces",
        activeRealtimeSpaceCode,
        relativePath
    ].filter(Boolean).join("/");
    const reference = database.ref(completePath);

    reference.on("value", callback);
    activeRealtimeSubscriptions.push({ reference, callback });
}

function listenToCurrentSpace(spaceCodeValue) {
    if (activeRealtimeSpaceCode === spaceCodeValue) {
        return;
    }

    stopCurrentSpaceListeners();
    activeRealtimeSpaceCode = spaceCodeValue;

    subscribeToSpaceValue("", (snapshot) => {
        const spaceData = snapshot.val();

        if (!spaceData) {
            return;
        }

        currentSpaceData = spaceData;

        const liveRelationStats = buildRelationStatistics(spaceData);
        updateDashboardRelationStats(liveRelationStats);

        if (lastShownScreen === "stats") {
            renderRelationStats(liveRelationStats);
        }

        if (lastShownScreen === "garden") {
            renderGarden(spaceData);
        }

        if (!spaceData.story && lastShownScreen === "dashboard") {
            showScreen("storyIntro");
            return;
        }

        updateRelationshipDays(spaceData.story);

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

        spaceCode.textContent = spaceCodeValue;

        if (spaceCodeLabel) {
            spaceCodeLabel.textContent = partner
                ? "Code espace :"
                : "Code à partager :";
        }

        if (dashboardSpaceCode) {
            dashboardSpaceCode.classList.toggle("is-waiting", !partner);
        }

        updateActivityBox();
    });

    listenToRankingChallenges();
    listenToGuessChallenges();
    listenToLikelyChallenges();
    listenToOkChallenges();
    listenToGreenFlagChallenges();
    listenToPrincessChallenges();
    listenToQuestionsChallenges();
}



async function loadRankingsData() {
    const response = await fetch("data/rankings.json");
    const data = await response.json();

    if (Array.isArray(data)) {
        rankings = data;
    } else {
        rankings = data.rankings || [];
    }

    updateDashboardContentCounts();
    console.log("Classements chargés :", rankings);
}

function updateDashboardContentCounts() {
    if (rankingCountLabel && rankings.length > 0) {
        rankingCountLabel.textContent =
            rankings.length +
            (rankings.length === 1 ? " catégorie" : " catégories");
    }

    if (guessCountLabel && guessQuestions.length > 0) {
        guessCountLabel.textContent =
            guessQuestions.length +
            (guessQuestions.length === 1 ? " question" : " questions");
    }

    if (questionsCountLabel && coupleQuestions.length > 0) {
        questionsCountLabel.textContent =
            coupleQuestions.length +
            (coupleQuestions.length === 1 ? " question" : " questions");
    }
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
        .ref("spaces/" + currentSpaceCode + "/guessAnswers/" + currentGuessId)
        .update({
            questionId: currentGuessQuestion.id,
            question: currentGuessQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/guessAnswers/" + currentGuessId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");
            showScreen("dashboard");
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
    )
    .then(() => {
        return incrementAnswersCount();
    })
    .then(() => {
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
            stopCurrentSpaceListeners();
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

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-theme", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";

    if (themeSettingIcon) {
        themeSettingIcon.textContent = isDark ? "🌙" : "☀️";
    }

    if (themeSettingLabel) {
        themeSettingLabel.textContent = isDark ? "Thème sombre" : "Thème clair";
    }

    if (toggleThemeBtn) {
        toggleThemeBtn.textContent = isDark
            ? "Passer au thème clair"
            : "Passer au thème sombre";
    }

    if (themeColorMeta) {
        themeColorMeta.setAttribute("content", isDark ? "#003e2d" : "#effaf3");
    }
}

toggleThemeBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme")
        ? "light"
        : "dark";

    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
});

historyBtn.addEventListener("click", () => {
    showScreen("history");
});

backFromHistoryBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

gardenBtn.addEventListener("click", () => {
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

textColorPicker.addEventListener("click", () => {
    runEditorCommand("foreColor", textColorPicker.value);
    keepEditorToolbarOpen();
});

highlightColorPicker.addEventListener("input", () => {
    runEditorCommand("hiliteColor", highlightColorPicker.value);
    keepEditorToolbarOpen();
});

highlightColorPicker.addEventListener("click", () => {
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
    const currentChallenge =
        pendingLikelyResults[currentPendingLikelyIndex];

    markCurrentLikelyResultSeen().then(() => {
        pendingLikelyResults =
            pendingLikelyResults.filter((challenge) => {
                return challenge.questionId !== currentChallenge.questionId;
            });

        currentPendingLikelyIndex = 0;
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

backFromStatsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

dashboardAchievementsBtn.addEventListener("click", () => {
    openAchievements();
});

backFromAchievementsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

statsPlayBtn.addEventListener("click", () => {
    showScreen("allGames");
});

startStoryBtn.addEventListener("click", () => {
    showScreen("storyDate");
});

saveStoryDateBtn.addEventListener("click", () => {
    const startDate = storyDateInput.value;

    if (!startDate) {
        alert("Choisis une date ❤️");
        return;
    }

    saveStoryData({
        startDate: startDate
    }).then(() => {
        showScreen("storyMeeting");
    });
});

saveStoryMeetingBtn.addEventListener("click", () => {
    saveStoryData({
        meetingPlace: storyMeetingInput.value.trim()
    }).then(() => {
        showScreen("storyFirstDate");
    });
});

saveStoryFirstDateBtn.addEventListener("click", () => {
    saveStoryData({
        firstDate: storyFirstDateInput.value.trim()
    }).then(() => {
        showScreen("storyNicknames");
    });
});

saveStoryNicknamesBtn.addEventListener("click", () => {
    saveStoryData({
        nicknameMine: storyNicknameMineInput.value.trim(),
        nicknamePartner: storyNicknamePartnerInput.value.trim()
    }).then(() => {
        showScreen("storySong");
    });
});

saveStorySongBtn.addEventListener("click", () => {
    saveStoryData({
        song: storySongInput.value.trim()
    }).then(() => {
        showScreen("storyDistance");
    });
});

storyTogetherBtn.addEventListener("click", () => {
    saveStoryData({
        situation: "together"
    }).then(() => {
        showScreen("storyFinal");
    });
});

storyDistanceBtn.addEventListener("click", () => {
    saveStoryData({
        situation: "distance"
    }).then(() => {
        showScreen("storyFinal");
    });
});

finishStoryBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

editStoryBtn.addEventListener("click", () => {
    showScreen("storyIntro");
});

backFromStoryPageBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

openAllGamesBtn.addEventListener("click", () => {
    showScreen("allGames");
});

backFromAllGamesBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

allRankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

allGuessBtn.addEventListener("click", () => {
    guessBtn.click();
});


allQuestionsBtn.addEventListener("click", () => {
    startQuestionsGame();
});

dashboardSettingsBtn.addEventListener("click", () => {
    previousScreen = "dashboard";
    showScreen("settings");
});

dashboardProfileBtn.addEventListener("click", () => {
    openStoryPage();
});

dashboardSpaceCode.addEventListener("click", async () => {
    if (!currentSpaceCode) {
        return;
    }

    try {
        await navigator.clipboard.writeText(currentSpaceCode);
        showToast("Code de l’espace copié 🌵");
    } catch (error) {
        console.warn("Copie du code indisponible", error);
        showToast("Code : " + currentSpaceCode);
    }
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

function incrementAnswersCount() {
    if (!currentSpaceCode) {
        return Promise.resolve();
    }

    const statsRef =
        database.ref("spaces/" + currentSpaceCode + "/stats");

    return statsRef.transaction((stats) => {
        if (!stats) {
            stats = {};
        }

        stats.answersCount =
            (stats.answersCount || 0) + 1;

        stats.seeds =
            (stats.seeds || 0) + 5;

        stats.xp =
            (stats.xp || 0) + 5;

        stats.level =
            Math.floor((stats.xp || 0) / 100) + 1;

        return stats;
    });
}

function awardCompletedGameBonus(mode, challengeId) {
    if (!currentSpaceCode || !challengeId) {
        return Promise.resolve(false);
    }

    const rewardKey = (mode + "_" + challengeId).replace(/[.#$\[\]\/]/g, "_");
    const statsRef = database.ref("spaces/" + currentSpaceCode + "/stats");

    return statsRef.transaction((stats) => {
        stats = stats || {};
        stats.completionRewards = stats.completionRewards || {};

        if (stats.completionRewards[rewardKey]) {
            return;
        }

        stats.completionRewards[rewardKey] = true;
        stats.seeds = (stats.seeds || 0) + 10;
        stats.xp = (stats.xp || 0) + 10;
        stats.level = Math.floor(stats.xp / 100) + 1;

        return stats;
    }).then((result) => {
        if (result.committed) {
            showToast("🎉 Partie terminée : +10 XP et +10 graines");
        }

        return result.committed;
    });
}

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
}).then(() => {
    return awardCompletedGameBonus("ranking", challenge.rankingId);
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

const GARDEN_CATALOG = [
    { id: "tulip", emoji: "🌷", name: "Tulipe corail", cost: 25 },
    { id: "miniCactus", emoji: "🌵", name: "Mini cactus", cost: 50 },
    { id: "bush", emoji: "🌿", name: "Buisson tendre", cost: 75 },
    { id: "mushroom", emoji: "🍄", name: "Champignon", cost: 90 },
    { id: "fountain", emoji: "⛲", name: "Petite fontaine", cost: 140 },
    { id: "bench", emoji: "🪑", name: "Banc à deux", cost: 180 },
    { id: "tree", emoji: "🌳", name: "Arbre complice", cost: 220 },
    { id: "lantern", emoji: "🏮", name: "Lanterne magique", cost: 300 }
];

function loadGarden() {
    if (!currentSpaceCode) {
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            renderGarden(snapshot.val() || {});
        })
        .catch((error) => {
            console.error("Impossible de charger le jardin", error);
            showToast("Le jardin ne peut pas être chargé pour le moment");
        });
}

function renderGarden(spaceData) {
    const seeds = spaceData.stats?.seeds || 0;
    const items = spaceData.garden?.items || {};
    const unlockedCount = Object.keys(items).length;
    const plantedItems = GARDEN_CATALOG.filter((item) => {
        return items[item.id]?.planted !== false && items[item.id];
    });
    const gardenLevel = Math.min(4, Math.floor(unlockedCount / 2) + 1);

    gardenSeedsBalance.textContent = seeds;
    gardenLevelBadge.textContent = "Jardin niveau " + gardenLevel;
    gardenPlantedCount.textContent =
        plantedItems.length + " élément" + (plantedItems.length > 1 ? "s" : "");
    gardenEmptyPlot.style.display = plantedItems.length === 0 ? "block" : "none";

    gardenPlot.querySelectorAll(".garden-planted-item").forEach((element) => {
        element.remove();
    });

    plantedItems.forEach((item, index) => {
        const planted = document.createElement("button");
        planted.type = "button";
        planted.className = "garden-planted-item garden-position-" + ((index % 8) + 1);
        planted.textContent = item.emoji;
        planted.title = item.name + " · toucher pour ranger";
        planted.setAttribute("aria-label", item.name + ", ranger cet élément");
        planted.addEventListener("click", () => toggleGardenItem(item.id, false));
        gardenPlot.appendChild(planted);
    });

    gardenShopGrid.innerHTML = "";
    GARDEN_CATALOG.forEach((item) => {
        const owned = Boolean(items[item.id]);
        const planted = owned && items[item.id].planted !== false;
        const card = document.createElement("article");
        card.className = "garden-shop-card" + (owned ? " is-owned" : "");

        const icon = document.createElement("span");
        icon.className = "garden-shop-icon";
        icon.textContent = item.emoji;

        const name = document.createElement("strong");
        name.textContent = item.name;

        const action = document.createElement("button");
        action.type = "button";

        if (owned) {
            action.textContent = planted ? "Ranger" : "Placer";
            action.className = "garden-toggle-item";
            action.addEventListener("click", () => {
                toggleGardenItem(item.id, !planted);
            });
        } else {
            action.textContent = "🌱 " + item.cost;
            action.disabled = seeds < item.cost;
            action.className = "garden-buy-item";
            action.addEventListener("click", () => buyGardenItem(item));
        }

        card.append(icon, name, action);
        gardenShopGrid.appendChild(card);
    });
}

function buyGardenItem(item) {
    const spaceRef = database.ref("spaces/" + currentSpaceCode);

    spaceRef.transaction((spaceData) => {
        if (!spaceData) {
            return;
        }

        spaceData.stats = spaceData.stats || {};
        spaceData.garden = spaceData.garden || {};
        spaceData.garden.items = spaceData.garden.items || {};

        if (spaceData.garden.items[item.id]) {
            return;
        }

        const seeds = spaceData.stats.seeds || 0;
        if (seeds < item.cost) {
            return;
        }

        spaceData.stats.seeds = seeds - item.cost;
        spaceData.garden.items[item.id] = {
            planted: true,
            unlockedAt: Date.now()
        };

        return spaceData;
    }).then((result) => {
        if (!result.committed) {
            showToast("Pas assez de graines ou élément déjà débloqué");
            return;
        }

        showToast(item.emoji + " " + item.name + " rejoint votre jardin");
        renderGarden(result.snapshot.val() || {});
    }).catch((error) => {
        console.error("Achat impossible", error);
        showToast("Achat impossible pour le moment");
    });
}

function toggleGardenItem(itemId, planted) {
    database
        .ref(
            "spaces/" + currentSpaceCode +
            "/garden/items/" + itemId + "/planted"
        )
        .set(planted)
        .then(() => loadGarden())
        .catch((error) => {
            console.error("Modification du jardin impossible", error);
            showToast("Impossible de modifier le jardin");
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

    updateDashboardContentCounts();
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
    if (!activityBox || !activityList || !currentUser) {
        return;
    }

    const activities = [];

    const addActivity = (items, priority, icon, text, action) => {
        if (!Array.isArray(items) || items.length === 0) {
            return;
        }

        activities.push({
            count: items.length,
            priority,
            icon,
            title: text(items.length),
            action
        });
    };

    addActivity(
        pendingRankingChallenges,
        10,
        "🌵",
        (count) => count === 1
            ? "1 classement t’attend"
            : count + " classements t’attendent",
        () => {
            isPlayingPendingChallenges = true;
            currentPendingChallengeIndex = 0;
            startPendingRankingChallenge();
        }
    );

    addActivity(
        pendingGuessAnswers,
        20,
        "💭",
        (count) => count === 1
            ? "1 réponse à écrire"
            : count + " réponses à écrire",
        () => {
            currentPendingGuessIndex = 0;
            startPendingGuessAnswer();
        }
    );

    addActivity(
        pendingGuessPredictions,
        21,
        "💭",
        (count) => count === 1
            ? "1 prédiction à faire"
            : count + " prédictions à faire",
        () => {
            currentPendingGuessIndex = 0;
            startPendingGuessPrediction();
        }
    );

    addActivity(
        pendingGuessValidations,
        22,
        "💭",
        (count) => count === 1
            ? "1 réponse à valider"
            : count + " réponses à valider",
        () => {
            currentPendingGuessIndex = 0;
            startPendingGuessValidation();
        }
    );

    addActivity(
        pendingLikelyChallenges,
        30,
        "👉",
        (count) => count === 1
            ? "1 question Qui est le plus susceptible t’attend"
            : count + " questions Qui est le plus susceptible t’attendent",
        () => {
            currentPendingLikelyIndex = 0;
            startPendingLikelyChallenge();
        }
    );

    addActivity(
        pendingOkChallenges,
        31,
        "✅",
        (count) => count === 1
            ? "1 question OK ou Pas OK t’attend"
            : count + " questions OK ou Pas OK t’attendent",
        () => {
            currentPendingOkIndex = 0;
            startPendingOkChallenge();
        }
    );

    addActivity(
        pendingGreenFlagChallenges,
        32,
        "🚩",
        (count) => count === 1
            ? "1 Green Flag ou Red Flag t’attend"
            : count + " Green Flags ou Red Flags t’attendent",
        () => {
            currentPendingGreenFlagIndex = 0;
            startPendingGreenFlagChallenge();
        }
    );

    addActivity(
        pendingPrincessChallenges,
        33,
        "👑",
        (count) => count === 1
            ? "1 Princess Treatment t’attend"
            : count + " Princess Treatments t’attendent",
        () => {
            currentPendingPrincessIndex = 0;
            startPendingPrincessChallenge();
        }
    );

    addActivity(
        pendingQuestionsChallenges,
        34,
        "💬",
        (count) => count === 1
            ? "1 question t’attend"
            : count + " questions t’attendent",
        () => {
            currentPendingQuestionsIndex = 0;
            startPendingQuestionsChallenge();
        }
    );

    addActivity(
        pendingRankingResults,
        50,
        "✨",
        (count) => count === 1
            ? "1 résultat de classement est disponible"
            : count + " résultats de classement sont disponibles",
        () => {
            currentPendingRankingResultIndex = 0;
            showPendingRankingResult();
        }
    );

    addActivity(
        pendingGuessResults,
        51,
        "✨",
        (count) => count === 1
            ? "1 résultat Devine ma réponse est disponible"
            : count + " résultats Devine ma réponse sont disponibles",
        () => {
            currentPendingGuessIndex = 0;
            showPendingGuessResult();
        }
    );

    addActivity(
        pendingLikelyResults,
        52,
        "✨",
        (count) => count === 1
            ? "1 résultat Qui est le plus susceptible est disponible"
            : count + " résultats Qui est le plus susceptible sont disponibles",
        () => {
            currentPendingLikelyIndex = 0;
            showPendingLikelyResult();
        }
    );

    addActivity(
        pendingOkResults,
        53,
        "✨",
        (count) => count === 1
            ? "1 résultat OK ou Pas OK est disponible"
            : count + " résultats OK ou Pas OK sont disponibles",
        () => {
            currentPendingOkIndex = 0;
            showPendingOkResult();
        }
    );

    addActivity(
        pendingGreenFlagResults,
        54,
        "✨",
        (count) => count === 1
            ? "1 résultat Green Flag ou Red Flag est disponible"
            : count + " résultats Green Flag ou Red Flag sont disponibles",
        () => {
            currentPendingGreenFlagIndex = 0;
            showPendingGreenFlagResult();
        }
    );

    addActivity(
        pendingPrincessResults,
        55,
        "✨",
        (count) => count === 1
            ? "1 résultat Princess Treatment est disponible"
            : count + " résultats Princess Treatment sont disponibles",
        () => {
            currentPendingPrincessIndex = 0;
            showPendingPrincessResult();
        }
    );

    addActivity(
        pendingQuestionsResults,
        56,
        "✨",
        (count) => count === 1
            ? "1 réponse est à découvrir"
            : count + " réponses sont à découvrir",
        () => {
            currentPendingQuestionsIndex = 0;
            showPendingQuestionsResult();
        }
    );

    if (activities.length > 0) {
        activities.sort((a, b) => a.priority - b.priority);

        const primaryActivity = activities[0];
        const remainingCount = activities
            .slice(1)
            .reduce((total, activity) => total + activity.count, 0);

        renderDashboardActivity({
            kicker: "À faire",
            icon: primaryActivity.icon,
            title: primaryActivity.title,
            subtitle: remainingCount > 0
                ? "+" + remainingCount + " autre" + (remainingCount > 1 ? "s" : "") + " action" + (remainingCount > 1 ? "s" : "")
                : "Ouvre pour continuer",
            action: primaryActivity.action
        });
        return;
    }

    const latestActivity = getLatestCompletedActivity();

    if (latestActivity) {
        renderDashboardActivity(latestActivity);
        return;
    }

    activityBox.style.display = "none";
    activityBox.onclick = null;
}

function renderDashboardActivity(activity) {
    activityList.innerHTML = "";

    const title = document.createElement("strong");
    title.className = "dashboard-activity-title";
    title.textContent = activity.title;

    const subtitle = document.createElement("span");
    subtitle.className = "dashboard-activity-subtitle";
    subtitle.textContent = activity.subtitle || "";

    activityList.appendChild(title);
    activityList.appendChild(subtitle);

    if (activityKicker) {
        activityKicker.textContent = activity.kicker;
    }

    if (activityIcon) {
        activityIcon.textContent = activity.icon;
    }

    activityBox.onclick = activity.action || null;
    activityBox.classList.toggle("is-actionable", Boolean(activity.action));
    activityBox.style.display = "grid";
}

function getLatestCompletedActivity() {
    if (!currentSpaceData) {
        return null;
    }

    const modes = [
        { key: "rankingChallenges", mode: "ranking", icon: "🌵", label: "un classement" },
        { key: "guessAnswers", mode: "guess", icon: "💭", label: "Devine ma réponse" },
        { key: "likelyChallenges", mode: "likely", icon: "👉", label: "Qui est le plus susceptible" },
        { key: "okChallenges", mode: "ok", icon: "✅", label: "OK ou Pas OK" },
        { key: "greenFlagChallenges", mode: "greenFlag", icon: "🚩", label: "Green Flag ou Red Flag" },
        { key: "princessChallenges", mode: "princess", icon: "👑", label: "Princess Treatment" },
        { key: "questionsChallenges", mode: "questions", icon: "💬", label: "une question" }
    ];

    let latest = null;

    modes.forEach((mode) => {
        Object.values(currentSpaceData[mode.key] || {}).forEach((challenge) => {
            if (challenge.status !== "completed") {
                return;
            }

            const answers = Object.values(challenge.answers || {});
            const lastAnswer = answers.reduce((newest, answer) => {
                if (!newest || (answer.createdAt || 0) > (newest.createdAt || 0)) {
                    return answer;
                }
                return newest;
            }, null);

            const timestamp = challenge.completedAt || lastAnswer?.createdAt || challenge.createdAt || 0;

            if (!timestamp || (latest && latest.timestamp >= timestamp)) {
                return;
            }

            const isMe = lastAnswer && lastAnswer.uid === currentUser.uid;
            const actor = isMe
                ? "Tu as"
                : (lastAnswer?.pseudo || getPartnerPseudo()) + " a";

            latest = {
                kicker: "Dernière activité",
                icon: mode.icon,
                title: actor + " terminé " + mode.label,
                subtitle: formatRelativeActivityTime(timestamp),
                timestamp,
                action: () => openHistoryMode(mode.mode)
            };
        });
    });

    return latest;
}

function formatRelativeActivityTime(timestamp) {
    const elapsed = Math.max(0, Date.now() - timestamp);
    const minutes = Math.floor(elapsed / 60000);

    if (minutes < 1) {
        return "À l’instant";
    }

    if (minutes < 60) {
        return "Il y a " + minutes + " minute" + (minutes > 1 ? "s" : "");
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return "Il y a " + hours + " heure" + (hours > 1 ? "s" : "");
    }

    const days = Math.floor(hours / 24);
    return "Il y a " + days + " jour" + (days > 1 ? "s" : "");
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
        .ref("spaces/" + currentSpaceCode + "/likelyChallenges/" + currentLikelyId)
        .update({
            questionId: currentLikelyQuestion.id,
            question: currentLikelyQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/likelyChallenges/" + currentLikelyId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startLikelyGame();
            });
        });
}

function listenToLikelyChallenges() {
    subscribeToSpaceValue("likelyChallenges", (snapshot) => {
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
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("likely", id);
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

    const myTarget =
        getLikelyChosenTarget(myAnswer);

    const partnerTarget =
        getLikelyChosenTarget(partnerAnswer);

    if (
        myTarget &&
        partnerTarget &&
        myTarget === partnerTarget
    ) {
        likelyVerdictEmoji.textContent = "💚";
        likelyVerdictText.textContent =
            "Vous avez désigné la même personne.";
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
        .ref("spaces/" + currentSpaceCode + "/okChallenges/" + currentOkId)
        .update({
            questionId: currentOkQuestion.id,
            question: currentOkQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/okChallenges/" + currentOkId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startOkGame();
            });
        });
}

function listenToOkChallenges() {
    subscribeToSpaceValue("okChallenges", (snapshot) => {
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
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("ok", id);
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
        "Vous avez la même limite.";
} else {
    okVerdictEmoji.textContent = "👀";
    okVerdictText.textContent =
        "Vous ne placez pas la limite au même endroit.";
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
        .ref("spaces/" + currentSpaceCode + "/greenFlagChallenges/" + currentGreenFlagId)
        .update({
            questionId: currentGreenFlagQuestion.id,
            question: currentGreenFlagQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/greenFlagChallenges/" + currentGreenFlagId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startGreenFlagGame();
            });
        });
}

function listenToGreenFlagChallenges() {
    subscribeToSpaceValue("greenFlagChallenges", (snapshot) => {
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
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("greenFlag", id);
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
        "Vous lisez ce comportement de la même façon.";
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
        alert("Question introuvable 👑");
        return;
    }

    currentPrincessId = currentPrincessQuestion.id;

    database
        .ref("spaces/" + currentSpaceCode + "/princessChallenges/" + currentPrincessId)
        .update({
            questionId: currentPrincessQuestion.id,
            question: currentPrincessQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/princessChallenges/" + currentPrincessId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("👑 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startPrincessGame();
            });
        });
}

function listenToPrincessChallenges() {
    subscribeToSpaceValue("princessChallenges", (snapshot) => {

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
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("princess", id);
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
    myAnswer.answer === partnerAnswer.answer
) {
    princessVerdictEmoji.textContent = "👑";
    princessVerdictText.textContent =
        "Vous avez la même vision du Princess Treatment.";
} else {
    princessVerdictEmoji.textContent = "👀";
    princessVerdictText.textContent =
        "Vous n’avez pas tout à fait la même vision.";
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

    updateDashboardContentCounts();
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
    const answer = questionsAnswerInput.value.trim();

    if (answer === "") {
        alert("Écris ta réponse 🌵");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/questionsChallenges/" + currentCoupleQuestionId)
        .update({
            questionId: currentCoupleQuestion.id,
            question: currentCoupleQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/questionsChallenges/" + currentCoupleQuestionId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showScreen("dashboard");
        });
}

function listenToQuestionsChallenges() {
    subscribeToSpaceValue("questionsChallenges", (snapshot) => {
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
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("questions", id);
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

const ACHIEVEMENTS = [
    { id: "firstAnswer", icon: "💬", title: "Premiers mots", description: "Donner une première réponse", metric: "answers", target: 1, unit: "réponse" },
    { id: "answers10", icon: "🌱", title: "Ça pousse", description: "Donner 10 réponses", metric: "answers", target: 10, unit: "réponses" },
    { id: "answers50", icon: "🌿", title: "Grande conversation", description: "Donner 50 réponses", metric: "answers", target: 50, unit: "réponses" },
    { id: "firstGame", icon: "🎮", title: "À deux, c’est mieux", description: "Terminer une première partie", metric: "games", target: 1, unit: "partie" },
    { id: "games10", icon: "🏅", title: "Duo régulier", description: "Terminer 10 parties", metric: "games", target: 10, unit: "parties" },
    { id: "games50", icon: "🏆", title: "Duo inséparable", description: "Terminer 50 parties", metric: "games", target: 50, unit: "parties" },
    { id: "level3", icon: "🌵", title: "Jeune pousse", description: "Atteindre le niveau 3", metric: "level", target: 3, unit: "niveau" },
    { id: "level10", icon: "💚", title: "Belle complicité", description: "Atteindre le niveau 10", metric: "level", target: 10, unit: "niveau" },
    { id: "level21", icon: "👑", title: "Cactus légendaire", description: "Atteindre le niveau 21", metric: "level", target: 21, unit: "niveau" },
    { id: "harmony80", icon: "💕", title: "Sur la même longueur d’onde", description: "Atteindre 80 % de compatibilité moyenne", metric: "compatibility", target: 80, unit: "%" },
    { id: "explorer", icon: "🧭", title: "Explorateurs", description: "Terminer une partie dans chaque mode", metric: "modes", target: 7, unit: "modes" },
    { id: "days30", icon: "📅", title: "Un mois de souvenirs", description: "Atteindre 30 jours ensemble", metric: "days", target: 30, unit: "jours" }
];

function getAchievementMetric(metric, stats, relationStats) {
    const values = {
        answers: Math.max(stats.answersCount || 0, relationStats.totalAnswers || 0),
        games: relationStats.totalGames || 0,
        level: stats.level || Math.floor((stats.xp || 0) / 100) + 1,
        compatibility: relationStats.averageCompatibility || 0,
        modes: relationStats.modes.filter((mode) => mode.completedCount > 0).length,
        days: relationStats.daysTogether || 0
    };

    return values[metric] || 0;
}

function openAchievements() {
    showScreen("achievements");
    achievementsLoadingState.style.display = "block";
    achievementsGrid.style.display = "none";

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val() || {};
            const stats = spaceData.stats || {};
            const relationStats = buildRelationStatistics(spaceData);
            const unlocked = { ...(stats.achievements || {}) };
            const newlyUnlocked = {};

            ACHIEVEMENTS.forEach((achievement) => {
                const current = getAchievementMetric(
                    achievement.metric,
                    stats,
                    relationStats
                );

                if (current >= achievement.target && !unlocked[achievement.id]) {
                    unlocked[achievement.id] = true;
                    newlyUnlocked[achievement.id] = true;
                }
            });

            const persistPromise = Object.keys(newlyUnlocked).length > 0
                ? database
                    .ref("spaces/" + currentSpaceCode + "/stats/achievements")
                    .update(newlyUnlocked)
                : Promise.resolve();

            return persistPromise.then(() => {
                currentSpaceData = spaceData;
                renderAchievements(stats, relationStats, unlocked);

                const newCount = Object.keys(newlyUnlocked).length;
                if (newCount > 0) {
                    showToast(
                        "🏆 " + newCount + " nouveau" +
                        (newCount > 1 ? "x succès débloqués" : " succès débloqué")
                    );
                }
            });
        })
        .catch((error) => {
            console.error("Impossible de charger les succès", error);
            achievementsLoadingState.textContent =
                "Impossible de charger vos succès pour le moment.";
        });
}

function renderAchievements(stats, relationStats, unlocked) {
    achievementsGrid.innerHTML = "";
    const unlockedCount = ACHIEVEMENTS.filter((achievement) => {
        return Boolean(unlocked[achievement.id]);
    }).length;

    achievementsUnlockedCount.textContent = unlockedCount;
    achievementsProgressBar.style.width =
        ((unlockedCount / ACHIEVEMENTS.length) * 100) + "%";

    ACHIEVEMENTS.forEach((achievement) => {
        const isUnlocked = Boolean(unlocked[achievement.id]);
        const current = getAchievementMetric(
            achievement.metric,
            stats,
            relationStats
        );
        const card = document.createElement("article");
        card.className = "achievement-card " +
            (isUnlocked ? "is-unlocked" : "is-locked");

        const icon = document.createElement("span");
        icon.className = "achievement-icon";
        icon.textContent = isUnlocked ? achievement.icon : "🔒";

        const title = document.createElement("strong");
        title.textContent = achievement.title;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        const progress = document.createElement("small");
        progress.textContent = isUnlocked
            ? "Débloqué ✓"
            : Math.min(current, achievement.target) + " / " +
                achievement.target + " " + achievement.unit;

        card.append(icon, title, description, progress);
        achievementsGrid.appendChild(card);
    });

    achievementsLoadingState.style.display = "none";
    achievementsGrid.style.display = "grid";
}

function openRelationStats() {
    showScreen("stats");

    statsLoadingState.style.display = "block";
    statsLoadingState.textContent = "Calcul de vos souvenirs…";
    statsContent.style.display = "none";

    if (currentSpaceData) {
        renderRelationStats(buildRelationStatistics(currentSpaceData));
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val() || {};
            currentSpaceData = spaceData;
            renderRelationStats(buildRelationStatistics(spaceData));
        })
        .catch((error) => {
            console.error("Impossible de charger les statistiques", error);
            statsLoadingState.textContent =
                "Impossible de charger vos statistiques pour le moment.";
        });
}

function buildRelationStatistics(spaceData) {
    const modeResults = relationStatsModes.map((mode) => {
        const items = Object.values(spaceData[mode.path] || {});
        const completedItems = items.filter((item) => {
            return item.status === "completed";
        });

        const answersCount = items.reduce((total, item) => {
            return total + Object.keys(item.answers || {}).length;
        }, 0);

        const scores = completedItems
            .map((item) => getCompletedItemCompatibility(mode.key, item))
            .filter((score) => typeof score === "number");

        return {
            ...mode,
            completedCount: completedItems.length,
            answersCount,
            completedItems,
            scores
        };
    });

    const totalGames = modeResults.reduce((total, mode) => {
        return total + mode.completedCount;
    }, 0);

    const totalAnswers = modeResults.reduce((total, mode) => {
        return total + mode.answersCount;
    }, 0);

    const allScores = modeResults.flatMap((mode) => mode.scores);
    const averageCompatibility = allScores.length > 0
        ? Math.round(
            allScores.reduce((total, score) => total + score, 0) /
            allScores.length
        )
        : null;

    const bestScore = allScores.length > 0
        ? Math.max(...allScores)
        : null;

    const favoriteMode = modeResults.reduce((favorite, mode) => {
        if (!favorite || mode.completedCount > favorite.completedCount) {
            return mode;
        }

        return favorite;
    }, null);

    const completedDates = modeResults
        .flatMap((mode) => mode.completedItems)
        .map((item) => item.completedAt || item.createdAt)
        .filter((date) => typeof date === "number")
        .sort((dateA, dateB) => dateA - dateB);

    return {
        totalGames,
        totalAnswers,
        averageCompatibility,
        bestScore,
        scoredGamesCount: allScores.length,
        favoriteMode:
            favoriteMode && favoriteMode.completedCount > 0
                ? favoriteMode
                : null,
        firstMemoryDate: completedDates[0] || null,
        lastMemoryDate: completedDates[completedDates.length - 1] || null,
        daysTogether: getRelationshipDayCount(spaceData.story),
        modes: modeResults
    };
}

function getCompletedItemCompatibility(modeKey, item) {
    if (modeKey === "questions") {
        return null;
    }

    if (modeKey === "guess") {
        const validations = Object.values(item.validations || {});

        if (validations.length < 2) {
            return null;
        }

        const score = validations.reduce((total, validation) => {
            return total + getGuessValidationScore(validation.result);
        }, 0);

        return Math.round((score / validations.length) * 100);
    }

    if (modeKey === "likely") {
        return calculateLikelyCompatibility(item.answers);
    }

    return typeof item.compatibility === "number"
        ? Math.max(0, Math.min(item.compatibility, 100))
        : null;
}

function calculateLikelyCompatibility(answers) {
    const answerEntries = Object.entries(answers || {});

    if (answerEntries.length < 2) {
        return null;
    }

    const selectedTargets = answerEntries.map(([uid, answerData]) => {
        if (answerData.answer === "Nous deux") {
            return "both";
        }

        if (answerData.answer === "Moi") {
            return uid;
        }

        if (answerData.answer === "Toi") {
            const partnerEntry = answerEntries.find(([partnerUid]) => {
                return partnerUid !== uid;
            });

            return partnerEntry ? partnerEntry[0] : null;
        }

        return null;
    });

    if (selectedTargets.some((target) => !target)) {
        return null;
    }

    return selectedTargets[0] === selectedTargets[1] ? 100 : 0;
}

function getRelationshipDayCount(story) {
    const dateValue = story && (story.startDate || story.relationshipDate);

    if (!dateValue) {
        return null;
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        return null;
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return Math.max(
        0,
        Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
    );
}

function renderRelationStats(relationStats) {
    statsLoadingState.style.display = "none";
    statsContent.style.display = "block";

    statsTotalGames.textContent = relationStats.totalGames;
    statsTotalAnswers.textContent = relationStats.totalAnswers;
    statsDaysTogether.textContent = relationStats.daysTogether === null
        ? "—"
        : relationStats.daysTogether;

    const compatibilityText = relationStats.averageCompatibility === null
        ? "—"
        : relationStats.averageCompatibility + "%";

    statsAverageCompatibility.textContent = compatibilityText;
    statsCompatibilityScore.textContent = compatibilityText;
    statsCompatibilityBar.style.width =
        (relationStats.averageCompatibility || 0) + "%";

    if (relationStats.averageCompatibility === null) {
        statsCompatibilityLabel.textContent =
            "Terminez un jeu comparable pour découvrir votre score.";
    } else {
        statsCompatibilityLabel.textContent =
            getCompatibilityLabel(relationStats.averageCompatibility) +
            " · " +
            relationStats.scoredGamesCount +
            " partie" +
            (relationStats.scoredGamesCount > 1 ? "s analysées" : " analysée");
    }

    statsFavoriteMode.textContent = relationStats.favoriteMode
        ? relationStats.favoriteMode.icon + " " + relationStats.favoriteMode.label
        : "À découvrir";

    statsBestScore.textContent = relationStats.bestScore === null
        ? "—"
        : relationStats.bestScore + "%";
    statsFirstMemory.textContent = formatStatsDate(relationStats.firstMemoryDate);
    statsLastMemory.textContent = formatStatsDate(relationStats.lastMemoryDate);

    if (relationStats.totalGames === 0) {
        statsHeroMessage.textContent = "Vos souvenirs commencent ici";
        statsHeroSubtitle.textContent =
            "Jouez ensemble pour faire pousser vos statistiques.";
    } else if (relationStats.averageCompatibility !== null) {
        statsHeroMessage.textContent =
            getCompatibilityLabel(relationStats.averageCompatibility);
        statsHeroSubtitle.textContent =
            relationStats.totalGames +
            " moment" +
            (relationStats.totalGames > 1 ? "s partagés" : " partagé") +
            " dans votre jardin.";
    } else {
        statsHeroMessage.textContent = "Votre histoire prend racine";
        statsHeroSubtitle.textContent =
            relationStats.totalGames +
            " souvenir" +
            (relationStats.totalGames > 1 ? "s créés" : " créé") +
            " ensemble.";
    }

    renderStatsModes(relationStats.modes);
    statsEmptyState.style.display =
        relationStats.totalGames === 0 ? "flex" : "none";

    updateDashboardRelationStats(relationStats);
}

function renderStatsModes(modes) {
    statsModesBreakdown.innerHTML = "";

    const maximumCount = Math.max(
        1,
        ...modes.map((mode) => mode.completedCount)
    );

    modes.forEach((mode) => {
        const row = document.createElement("article");
        row.classList.add("stats-mode-row");

        const icon = document.createElement("span");
        icon.classList.add("stats-mode-icon");
        icon.textContent = mode.icon;

        const content = document.createElement("div");
        content.classList.add("stats-mode-content");

        const heading = document.createElement("div");
        heading.classList.add("stats-mode-heading");

        const label = document.createElement("strong");
        label.textContent = mode.label;

        const count = document.createElement("small");
        count.textContent =
            mode.completedCount +
            " partie" +
            (mode.completedCount > 1 ? "s" : "");

        const track = document.createElement("div");
        track.classList.add("stats-mode-track");

        const progress = document.createElement("div");
        progress.style.width =
            ((mode.completedCount / maximumCount) * 100) + "%";
        progress.style.background = mode.color;

        heading.appendChild(label);
        heading.appendChild(count);
        track.appendChild(progress);
        content.appendChild(heading);
        content.appendChild(track);
        row.appendChild(icon);
        row.appendChild(content);
        statsModesBreakdown.appendChild(row);
    });
}

function formatStatsDate(timestamp) {
    if (!timestamp) {
        return "Aucun";
    }

    return new Date(timestamp).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function updateDashboardRelationStats(relationStats) {
    const compatibility = relationStats.averageCompatibility;

    if (compatibilityStat) {
        compatibilityStat.textContent = compatibility === null
            ? "—"
            : compatibility + "%";
    }

    if (compatibilityMiniBar) {
        compatibilityMiniBar.style.width = (compatibility || 0) + "%";
    }

    if (completedGamesStat) {
        completedGamesStat.textContent = relationStats.totalGames;
    }

    if (completedGamesMiniBar) {
        completedGamesMiniBar.style.width =
            Math.min((relationStats.totalGames / 25) * 100, 100) + "%";
    }
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

function calculateChoiceCompatibility(answerA, answerB) {
    if (!answerA || !answerB) {
        return 0;
    }

    if (answerA === answerB) {
        return 100;
    }

    return 0;
}

function getLikelyChosenTarget(answerData) {
    if (!answerData) {
        return null;
    }

    if (answerData.answer === "Nous deux") {
        return "both";
    }

    if (answerData.answer === "Moi") {
        return answerData.uid;
    }

    if (answerData.answer === "Toi") {
        const answersArray =
            Object.values(
                pendingLikelyResults[currentPendingLikelyIndex]?.answers || {}
            );

        const partnerAnswer =
            answersArray.find((answer) => {
                return answer.uid !== answerData.uid;
            });

        return partnerAnswer ? partnerAnswer.uid : "partner";
    }

    return null;
}

const CACTUS_EVOLUTIONS = [
    {
        minimumLevel: 21,
        name: "Cactus légendaire",
        image: "assets/cactus-stage-6.png",
        message: "Votre cactus est devenu légendaire ! 👑✨"
    },
    {
        minimumLevel: 15,
        name: "Cactus épanoui",
        image: "assets/cactus-stage-5.png",
        message: "Votre cactus est pleinement épanoui ! 🌸✨"
    },
    {
        minimumLevel: 10,
        name: "Cactus complice",
        image: "assets/cactus-stage-4.png",
        message: "Votre cactus respire la complicité ! 💚"
    },
    {
        minimumLevel: 6,
        name: "Cactus curieux",
        image: "assets/cactus-stage-3.png",
        message: "Votre cactus devient très curieux ! 🔎"
    },
    {
        minimumLevel: 3,
        name: "Jeune cactus",
        image: "assets/cactus-stage-2.png",
        message: "Votre jeune cactus grandit bien ! 🌿"
    },
    {
        minimumLevel: 1,
        name: "Bébé cactus",
        image: "assets/cactus-stage-1.png",
        message: "Votre bébé cactus découvre votre histoire ! 🌱"
    }
];

let lastRenderedCactusStage = null;

function updateCactusEvolution(level) {
    const safeLevel = Math.max(Number(level) || 1, 1);
    const evolution = CACTUS_EVOLUTIONS.find((stage) => {
        return safeLevel >= stage.minimumLevel;
    });

    if (mainCactusImage) {
        const shouldAnimate =
            lastRenderedCactusStage !== null &&
            lastRenderedCactusStage !== evolution.minimumLevel;

        mainCactusImage.src = evolution.image;
        mainCactusImage.alt = "Votre cactus, " + evolution.name;

        if (shouldAnimate) {
            mainCactusImage.classList.remove("is-evolving");
            void mainCactusImage.offsetWidth;
            mainCactusImage.classList.add("is-evolving");
        }

        lastRenderedCactusStage = evolution.minimumLevel;
    }

    if (dashboardCactusMessage) {
        dashboardCactusMessage.textContent = evolution.message;
    }
}

function loadCoupleStats() {
    if (currentSpaceData) {
        updateDashboardRelationStats(
            buildRelationStatistics(currentSpaceData)
        );
    }

    database
        .ref("spaces/" + currentSpaceCode + "/stats")
        .once("value")
        .then((snapshot) => {
            const stats = snapshot.val() || {};

            const seeds = stats.seeds || 0;
            const level = stats.level || 1;
            const xp = stats.xp || 0;

            if (seedsStat) {
                seedsStat.textContent = seeds;
            }

            if (levelStat) {
                levelStat.textContent = level;
            }

            if (levelHeroStat) {
                levelHeroStat.textContent = level;
            }

            updateCactusEvolution(level);

            const xpPerLevel = 100;
            const xpInsideCurrentLevel = xp % xpPerLevel;
            const progressPercent =
                Math.min((xpInsideCurrentLevel / xpPerLevel) * 100, 100);

            if (currentXpHero) {
                currentXpHero.textContent = xpInsideCurrentLevel;
            }

            if (nextLevelXpHero) {
                nextLevelXpHero.textContent = xpPerLevel;
            }

            if (cactusXpProgressBar) {
                cactusXpProgressBar.style.width =
                    progressPercent + "%";
            }

            if (seedsMiniBar) {
                seedsMiniBar.style.width =
                    Math.min((seeds / 500) * 100, 100) + "%";
            }

            if (levelMiniBar) {
                levelMiniBar.style.width =
                    Math.min((level / 10) * 100, 100) + "%";
            }

            if (
                lastKnownSeeds !== null &&
                seeds > lastKnownSeeds
            ) {
                showToast(
                    "🌱 +" +
                    (seeds - lastKnownSeeds) +
                    " graines"
                );
            }

            lastKnownSeeds = seeds;
        });
}

function saveStoryData(data) {
    if (!currentSpaceCode) {
        return Promise.resolve();
    }

    return database
        .ref("spaces/" + currentSpaceCode + "/story")
        .update(data);
}

function updateRelationshipDays(story) {
    if (!relationshipDaysText) {
        return;
    }

    const dateValue = story && (story.startDate || story.relationshipDate);

    if (!dateValue) {
        relationshipDaysText.textContent = "❤️ Votre petit monde à deux";
        return;
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        relationshipDaysText.textContent = "❤️ Votre petit monde à deux";
        return;
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        relationshipDaysText.textContent =
            "❤️ Votre histoire commence aujourd’hui";
        return;
    }

    relationshipDaysText.textContent =
        "❤️ " + diffDays + " jours ensemble";
}

function getRelationshipDaysText(dateValue) {
    if (!dateValue) {
        return "Date à renseigner";
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        return "Date à renseigner";
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffDays = Math.max(
        0,
        Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
    );

    return diffDays + " jour" + (diffDays > 1 ? "s" : "");
}

function openStoryPage() {
    database
        .ref("spaces/" + currentSpaceCode + "/story")
        .once("value")
        .then((snapshot) => {
            const story = snapshot.val();

            if (!story) {
                showScreen("storyIntro");
                return;
            }

            storyPageContent.innerHTML = `
                <div class="story-info-card">
                    <span>📅</span>
                    <div>
                        <small>Ensemble depuis</small>
                        <strong>${getRelationshipDaysText(story.startDate || story.relationshipDate)}</strong>
                    </div>
                </div>

                <div class="story-info-card">
                    <span>📍</span>
                    <div>
                        <small>Rencontre</small>
                        <strong>${story.meetingPlace || "Non renseigné"}</strong>
                    </div>
                </div>

                <div class="story-info-card">
                    <span>☕</span>
                    <div>
                        <small>Premier rendez-vous</small>
                        <strong>${story.firstDate || "Non renseigné"}</strong>
                    </div>
                </div>

                <div class="story-info-card">
                    <span>💬</span>
                    <div>
                        <small>Vos surnoms</small>
                        <strong>${story.nicknameMine || "—"} / ${story.nicknamePartner || "—"}</strong>
                    </div>
                </div>

                <div class="story-info-card">
                    <span>🎵</span>
                    <div>
                        <small>Votre chanson</small>
                        <strong>${story.song || "Non renseigné"}</strong>
                    </div>
                </div>

                <div class="story-info-card">
                    <span>🏠</span>
                    <div>
                        <small>Situation</small>
                        <strong>${(story.situation || story.relationshipType) === "distance" ? "À distance" : "Ensemble"}</strong>
                    </div>
                </div>
            `;

            showScreen("storyPage");
        });
}

function showDashboardLastActivity(text) {
    if (!text) {
        updateActivityBox();
        return;
    }

    renderDashboardActivity({
        kicker: "Dernière activité",
        icon: "🪴",
        title: text,
        subtitle: ""
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
                    stopCurrentSpaceListeners();
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
                    stopCurrentSpaceListeners();
                    showScreen("couple");
                }
            });
    } else {
        stopCurrentSpaceListeners();
        currentUser = null;
        showScreen("login");
    }
});

loadRankingsData();
loadGuessQuestionsData();
loadLikelyQuestionsData();

applyTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

function displayRankingChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingRankingChallenges = challengeArray.filter((challenge) => {
        if (!challenge.answers) return false;
        if (!challenge.rankingId) return false;

        const myAnswer =
            challenge.answers[currentUser.uid];

        const someoneElseAnswered =
            Object.keys(challenge.answers).some((uid) => {
                return uid !== currentUser.uid;
            });

        return (
            !myAnswer &&
            someoneElseAnswered &&
            challenge.status !== "completed"
        );
    });

    pendingRankingResults = challengeArray.filter((challenge) => {
        if (!challenge.answers) return false;
        if (!challenge.rankingId) return false;

        const myAnswer =
            challenge.answers[currentUser.uid];

        const someoneElseAnswered =
            Object.keys(challenge.answers).some((uid) => {
                return uid !== currentUser.uid;
            });

        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            myAnswer &&
            someoneElseAnswered &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function listenToGuessChallenges() {
    subscribeToSpaceValue("guessAnswers", (snapshot) => {
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
        })
        .then(() => {
            return awardCompletedGameBonus("guess", id);
        });
}

            });

            displayGuessChallenges(challenges);
    });
}
