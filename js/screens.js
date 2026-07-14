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

function hideScreen(screen) {
    if (screen) {
        screen.style.display = "none";
    }
}

function showScreenContent(screenName) {
    hideScreen(loginScreen);
    hideScreen(pseudoScreen);
    hideScreen(coupleScreen);
    hideScreen(dashboardScreen);

    hideScreen(rankingScreen);
    hideScreen(rankingResultScreen);
    hideScreen(rankingCompatibilityScreen);

    hideScreen(settingsScreen);
    hideScreen(historyScreen);
    hideScreen(historyDetailScreen);
    hideScreen(historyItemScreen);

    hideScreen(gardenScreen);
    hideScreen(notebookScreen);

    hideScreen(guessAnswerScreen);
    hideScreen(guessWaitingScreen);
    hideScreen(guessPredictScreen);
    hideScreen(guessValidationScreen);
    hideScreen(guessResultScreen);

    hideScreen(likelyScreen);
    hideScreen(likelyResultScreen);

    hideScreen(okScreen);
    hideScreen(okResultScreen);

    hideScreen(greenFlagScreen);
    hideScreen(greenFlagResultScreen);

    hideScreen(princessScreen);
    hideScreen(princessResultScreen);

    hideScreen(questionsScreen);
    hideScreen(questionsResultScreen);

    hideScreen(answerSentScreen);

    hideScreen(storyIntroScreen);
    hideScreen(storyDateScreen);
    hideScreen(storyMeetingScreen);
    hideScreen(storyFirstDateScreen);
    hideScreen(storyNicknamesScreen);
    hideScreen(storySongScreen);
    hideScreen(storyDistanceScreen);
    hideScreen(storyFinalScreen);
    hideScreen(storyPageScreen);

    hideScreen(allGamesScreen);

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
    ) {
        historyBtn.style.display = "flex";
        gardenBtn.style.display = "flex";
        settingsBtn.style.display = "flex";
    }

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

        case "historyDetail":
            historyDetailScreen.style.display = "block";
            break;

        case "historyItem":
            historyItemScreen.style.display = "block";
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

        case "storyIntro":
            storyIntroScreen.style.display = "block";
            break;

        case "storyDate":
            storyDateScreen.style.display = "block";
            break;

        case "storyMeeting":
            storyMeetingScreen.style.display = "block";
            break;

        case "storyFirstDate":
            storyFirstDateScreen.style.display = "block";
            break;

        case "storyNicknames":
            storyNicknamesScreen.style.display = "block";
            break;

        case "storySong":
            storySongScreen.style.display = "block";
            break;

        case "storyDistance":
            storyDistanceScreen.style.display = "block";
            break;

        case "storyFinal":
            storyFinalScreen.style.display = "block";
            break;

                case "allGames":
            allGamesScreen.style.display = "block";
            break;

        case "storyPage":
            storyPageScreen.style.display = "block";
            break;

        default:
            dashboardScreen.style.display = "block";
            lastShownScreen = "dashboard";
            break;
    }
}-

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