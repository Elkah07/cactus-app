let isNavigatingWithBrowserBack = false;
let lastShownScreen = null;

function showScreen(screenName) {
    if (!isNavigatingWithBrowserBack && lastShownScreen !== screenName) {
        history.pushState(
            { screen: screenName },
            "",
            "#" + screenName
        );
    }

    lastShownScreen = screenName;
    showScreenContent(screenName);
}

function showScreenContent(screenName) {

    // ====================
    // MASQUER TOUS LES ÉCRANS
    // ====================

    loginScreen.style.display = "none";
    pseudoScreen.style.display = "none";
    coupleScreen.style.display = "none";
    dashboardScreen.style.display = "none";

    rankingScreen.style.display = "none";
    rankingResultScreen.style.display = "none";
    rankingCompatibilityScreen.style.display = "none";

    settingsScreen.style.display = "none";
    historyScreen.style.display = "none";

    gardenScreen.style.display = "none";
    notebookScreen.style.display = "none";

    guessAnswerScreen.style.display = "none";
    guessWaitingScreen.style.display = "none";
    guessPredictScreen.style.display = "none";
    guessValidationScreen.style.display = "none";
    guessResultScreen.style.display = "none";

    likelyScreen.style.display = "none";
    likelyResultScreen.style.display = "none";

    okScreen.style.display = "none";
    okResultScreen.style.display = "none";

    greenFlagScreen.style.display = "none";
    greenFlagResultScreen.style.display = "none";

    princessScreen.style.display = "none";
    princessResultScreen.style.display = "none";

    questionsScreen.style.display = "none";
    questionsResultScreen.style.display = "none";

    answerSentScreen.style.display = "none";

    historyDetailScreen.style.display = "none";

    historyItemScreen.style.display = "none";

    // ====================
    // BOUTONS DU HAUT
    // ====================

    historyBtn.style.display = "none";
    gardenBtn.style.display = "none";
    settingsBtn.style.display = "none";

    if (
    screenName === "dashboard" ||
    screenName === "history" ||
    screenName === "historyDetail" ||
    screenName === "historyItem" ||
    screenName === "garden" ||
    screenName === "settings"
)

{
        historyBtn.style.display = "flex";
        gardenBtn.style.display = "flex";
        settingsBtn.style.display = "flex";
    }

    // ====================
    // AFFICHAGE ÉCRAN DEMANDÉ
    // ====================

    switch (screenName) {
        case "login":
            loginScreen.style.display = "block";
            break;

        case "pseudo":
            pseudoScreen.style.display = "block";
            break;

        case "couple":
            coupleScreen.style.display = "block";
            break;

        case "dashboard":
    dashboardScreen.style.display = "block";
    loadCoupleStats();
    break;

        case "ranking":
            rankingScreen.style.display = "block";
            break;

        case "rankingResult":
            rankingResultScreen.style.display = "block";
            break;

        case "rankingCompatibility":
            rankingCompatibilityScreen.style.display = "block";
            break;

        case "settings":
            settingsScreen.style.display = "block";
            break;

        case "history":
            historyScreen.style.display = "block";
            break;

        case "garden":
            gardenScreen.style.display = "block";
            break;

        case "notebook":
            notebookScreen.style.display = "block";
            break;

        case "guessAnswer":
            guessAnswerScreen.style.display = "block";
            break;

        case "guessWaiting":
            guessWaitingScreen.style.display = "block";
            break;

        case "guessPredict":
            guessPredictScreen.style.display = "block";
            break;

        case "guessValidation":
            guessValidationScreen.style.display = "block";
            break;

        case "guessResult":
            guessResultScreen.style.display = "block";
            break;

        case "likely":
            likelyScreen.style.display = "block";
            break;

        case "likelyResult":
            likelyResultScreen.style.display = "block";
            break;

        case "ok":
            okScreen.style.display = "block";
            break;

        case "okResult":
            okResultScreen.style.display = "block";
            break;

        case "greenFlag":
            greenFlagScreen.style.display = "block";
            break;

        case "greenFlagResult":
            greenFlagResultScreen.style.display = "block";
            break;

        case "princess":
            princessScreen.style.display = "block";
            break;

        case "princessResult":
            princessResultScreen.style.display = "block";
            break;

        case "questions":
            questionsScreen.style.display = "block";
            break;

        case "questionsResult":
            questionsResultScreen.style.display = "block";
            break;

        case "answerSent":
    answerSentScreen.style.display = "block";
    break;

case "historyDetail":
    historyDetailScreen.style.display = "block";
    break;

case "historyItem":
    historyItemScreen.style.display = "block";
    break;

default:
    dashboardScreen.style.display = "block";
    lastShownScreen = "dashboard";
    break;

    }
}



window.addEventListener("popstate", (event) => {
    if (!event.state || !event.state.screen) {
        return;
    }

    isNavigatingWithBrowserBack = true;

    lastShownScreen = event.state.screen;
    showScreenContent(event.state.screen);

    isNavigatingWithBrowserBack = false;
});

history.replaceState(
    { screen: "login" },
    "",
    "#login"
);