function showScreen(screenName) {

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

    // ====================
    // BOUTONS DU HAUT
    // ====================

    historyBtn.style.display = "none";
    gardenBtn.style.display = "none";
    settingsBtn.style.display = "none";

    if (
        screenName === "dashboard" ||
        screenName === "history" ||
        screenName === "garden" ||
        screenName === "settings"
    ) {
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

        // ====================
        // DEVINE MA RÉPONSE
        // ====================

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
    }
}