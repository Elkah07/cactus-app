let isNavigatingWithBrowserBack = false;
let lastShownScreen = null;
const coupleDaresHubScreen = document.getElementById("coupleDaresHubScreen");
const secretGardenScreen = document.getElementById("secretGardenScreen");

const CACTUS_NAV_STATE_KEY = "cactusNavigation";
const CACTUS_AUTH_FLOW_SCREENS = new Set([
    "login",
    "pseudo",
    "couple",
    "onboarding"
]);

function getCactusHistoryState() {
    const state = history.state;

    if (!state || state[CACTUS_NAV_STATE_KEY] !== true || !state.screen) {
        return null;
    }

    return state;
}

function hasActiveCactusSpace() {
    try {
        return Boolean(auth?.currentUser && currentSpaceCode);
    } catch (error) {
        return false;
    }
}

function createCactusRootState(screenName, isGuard = false) {
    return {
        [CACTUS_NAV_STATE_KEY]: true,
        screen: screenName,
        fromScreen: null,
        rootScreen: screenName,
        depth: 0,
        rootGuard: isGuard
    };
}

function replaceCactusHistoryRoot(screenName) {
    const rootState = createCactusRootState(screenName, false);
    history.replaceState(rootState, "", "#" + screenName);

    // Sur le dashboard d'un couple connecté, on garde une entrée jumelle devant
    // la racine. Le bouton Retour Android revient donc au dashboard au lieu de
    // sortir de l'app ou de remonter vers un ancien écran d'authentification.
    if (screenName === "dashboard" && hasActiveCactusSpace()) {
        history.pushState(createCactusRootState(screenName, true), "", "#" + screenName);
    }
}

function pushCactusHistoryScreen(screenName) {
    const currentState = getCactusHistoryState();
    const currentDepth = Number.isFinite(currentState?.depth)
        ? currentState.depth
        : 0;

    history.pushState(
        {
            [CACTUS_NAV_STATE_KEY]: true,
            screen: screenName,
            fromScreen: lastShownScreen,
            rootScreen: currentState?.rootScreen || lastShownScreen || screenName,
            depth: currentDepth + 1
        },
        "",
        "#" + screenName
    );
}

function shouldStartNewNavigationRoot(screenName) {
    const signedIn = Boolean(auth?.currentUser);
    const currentState = getCactusHistoryState();

    if (screenName === "login" && !signedIn) {
        return true;
    }

    if (!signedIn) {
        return false;
    }

    if (screenName === "dashboard") {
        return currentState?.rootScreen !== "dashboard";
    }

    if (
        ["pseudo", "onboarding", "couple"].includes(screenName) &&
        !hasActiveCactusSpace()
    ) {
        return currentState?.rootScreen !== screenName;
    }

    return false;
}

function resolveSafeHistoryScreen(screenName) {
    const signedIn = Boolean(auth?.currentUser);
    const activeSpace = hasActiveCactusSpace();

    if (!signedIn) {
        return "login";
    }

    if (activeSpace && CACTUS_AUTH_FLOW_SCREENS.has(screenName)) {
        return "dashboard";
    }

    if (!activeSpace && screenName === "dashboard") {
        return "couple";
    }

    if (!activeSpace && screenName === "login") {
        if (
            lastShownScreen &&
            CACTUS_AUTH_FLOW_SCREENS.has(lastShownScreen) &&
            lastShownScreen !== "login"
        ) {
            return lastShownScreen;
        }

        return "couple";
    }

    return screenName;
}

function showScreen(screenName) {
    if (lastShownScreen === screenName) {
        showScreenContent(screenName);
        return;
    }

    if (!isNavigatingWithBrowserBack && shouldStartNewNavigationRoot(screenName)) {
        replaceCactusHistoryRoot(screenName);
        lastShownScreen = screenName;
        showScreenContent(screenName);
        return;
    }

    const currentState = getCactusHistoryState();

    if (!isNavigatingWithBrowserBack && currentState) {
        // Revenir vers la racine de la session (le dashboard) doit être un vrai retour,
        // pas une nouvelle page ajoutée au-dessus des jeux déjà visités.
        if (
            screenName === currentState.rootScreen &&
            Number.isFinite(currentState.depth) &&
            currentState.depth > 0
        ) {
            history.go(-currentState.depth);
            return;
        }

        // Les boutons « retour » existants utilisent showScreen(...). Si la cible est
        // précisément l'écran précédent, on utilise désormais le vrai historique.
        if (
            currentState.fromScreen === screenName &&
            Number.isFinite(currentState.depth) &&
            currentState.depth > 0
        ) {
            history.back();
            return;
        }
    }

    if (!isNavigatingWithBrowserBack) {
        pushCactusHistoryScreen(screenName);
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
    // Nettoyage des états transitoires : un retour navigateur ou un changement
    // d'écran ne doit jamais laisser une feuille/modale invisible bloquer la page.
    if (!["shopping", "tasks", "reminders"].includes(screenName)) {
        document.body.classList.remove("organizer-sheet-open");
    }
    if (screenName !== "importantDates") {
        document.body.classList.remove("calendar-customizer-open");
    }
    if (screenName !== "timeCapsules") {
        document.body.classList.remove("time-capsule-emoji-open", "time-capsule-modal-open");
    }

    document.body.classList.toggle(
        "dashboard-active",
        screenName === "dashboard"
    );
    document.body.classList.toggle(
        "stats-active",
        screenName === "stats"
    );
    document.body.classList.toggle(
        "achievements-active",
        screenName === "achievements"
    );
    document.body.classList.toggle(
        "secondary-active",
        ["allGames", "newGame", "garden", "dailyTools", "shopping", "tasks", "reminders", "importantDates", "countdowns", "timeCapsules", "history", "storyPage", "settings", "notifications", "dailyRitual", "coupleProfile", "onboarding", "discussions", "coupleDaresHub", "secretGarden"].includes(screenName)
    );

    hideScreen(loginScreen);
    hideScreen(pseudoScreen);
    hideScreen(coupleScreen);
    hideScreen(onboardingScreen);
    hideScreen(dashboardScreen);

    hideScreen(rankingScreen);
    hideScreen(rankingResultScreen);
    hideScreen(rankingCompatibilityScreen);

    hideScreen(settingsScreen);
    hideScreen(historyScreen);
    hideScreen(historyDetailScreen);
    hideScreen(historyItemScreen);
    hideScreen(statsScreen);
    hideScreen(achievementsScreen);
    hideScreen(notificationsScreen);
    hideScreen(dailyRitualScreen);
    hideScreen(discussionsScreen);

    hideScreen(gardenScreen);
    hideScreen(dailyToolsScreen);
    hideScreen(shoppingListScreen);
    hideScreen(tasksScreen);
    hideScreen(remindersScreen);
    hideScreen(importantDatesScreen);
    hideScreen(countdownsScreen);
    hideScreen(timeCapsulesScreen);
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
    hideScreen(coupleProfileScreen);

    hideScreen(allGamesScreen);
    hideScreen(newGameScreen);
    hideScreen(coupleDaresHubScreen);
    hideScreen(secretGardenScreen);

    historyBtn.style.setProperty("display", "none", "important");
gardenBtn.style.setProperty("display", "none", "important");
settingsBtn.style.setProperty("display", "none", "important");

   if (
    screenName === "history" ||
    screenName === "historyDetail" ||
    screenName === "historyItem" ||
    screenName === "stats" ||
    screenName === "achievements" ||
    screenName === "garden" ||
    screenName === "dailyTools" ||
    screenName === "shopping" ||
    screenName === "tasks" ||
    screenName === "reminders" ||
    screenName === "importantDates" ||
    screenName === "countdowns" ||
    screenName === "timeCapsules" ||
    screenName === "settings" ||
    screenName === "discussions" ||
    screenName === "coupleDaresHub" ||
    screenName === "secretGarden"
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

        case "onboarding":
            onboardingScreen.style.display = "block";
            break;

        case "dashboard":
            dashboardScreen.style.display = "block";
            loadCoupleStats();
            updateActivityBox();
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

        case "stats":
            statsScreen.style.display = "block";
            break;

        case "achievements":
            achievementsScreen.style.display = "block";
            break;

        case "notifications":
            notificationsScreen.style.display = "block";
            loadNotifications();
            break;

        case "dailyRitual":
            dailyRitualScreen.style.display = "block";
            loadDailyRitual();
            break;

        case "discussions":
            discussionsScreen.style.display = "block";
            renderDiscussions(currentSpaceData);
            break;

        case "garden":
            gardenScreen.style.display = "block";
            loadGarden();
            break;

        case "dailyTools":
            dailyToolsScreen.style.display = "block";
            loadNotebooks();
            break;

        case "shopping":
            shoppingListScreen.style.display = "block";
            renderShoppingList(currentSpaceData?.dailyTools?.shopping?.items || {});
            break;

        case "tasks":
            tasksScreen.style.display = "block";
            prepareOrganizerAssignees(taskAssigneeInput);
            renderTasks(currentSpaceData?.dailyTools?.tasks || {});
            break;

        case "reminders":
            remindersScreen.style.display = "block";
            prepareOrganizerAssignees(reminderTargetInput);
            renderReminders(currentSpaceData?.dailyTools?.reminders || {});
            break;

        case "importantDates":
            importantDatesScreen.style.display = "block";
            renderImportantDates(currentSpaceData?.dailyTools?.importantDates || {});
            break;

        case "countdowns":
            countdownsScreen.style.display = "block";
            renderCountdowns(currentSpaceData?.dailyTools?.countdowns || {});
            break;

        case "timeCapsules":
            timeCapsulesScreen.style.display = "block";
            prepareOrganizerAssignees(timeCapsuleAuthorInput);
            renderTimeCapsules(currentSpaceData?.dailyTools?.timeCapsules || {});
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

        case "newGame":
            newGameScreen.style.display = "block";
            renderNewGame(currentSpaceData);
            break;

        case "coupleDaresHub":
            coupleDaresHubScreen.style.display = "block";
            if (typeof renderCoupleDaresHub === "function") renderCoupleDaresHub(currentSpaceData);
            break;

        case "secretGarden":
            secretGardenScreen.style.display = "block";
            if (typeof renderSecretGarden === "function") renderSecretGarden(currentSpaceData);
            break;

        case "storyPage":
            storyPageScreen.style.display = "block";
            break;

        case "coupleProfile":
            coupleProfileScreen.style.display = "block";
            break;

        default:
            dashboardScreen.style.display = "block";
            lastShownScreen = "dashboard";
            break;
    }

    // Chaque écran de l'app s'ouvre depuis son début. Cela évite de tomber au
    // milieu d'un nouvel écran après avoir beaucoup scrollé sur le précédent.
    window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
}

window.addEventListener("popstate", (event) => {
    const state = event.state;

    // Une entrée sans état Cactus correspond généralement à l'historique du
    // navigateur avant l'ouverture de l'app. Tant qu'un espace est actif, on
    // reste volontairement dans CACTUS et on réarme la racine du dashboard.
    if (!state || state[CACTUS_NAV_STATE_KEY] !== true || !state.screen) {
        if (hasActiveCactusSpace()) {
            replaceCactusHistoryRoot("dashboard");
            lastShownScreen = "dashboard";
            showScreenContent("dashboard");
        }
        return;
    }

    isNavigatingWithBrowserBack = true;

    const requestedScreen = state.screen;
    const safeScreen = resolveSafeHistoryScreen(requestedScreen);

    if (safeScreen !== requestedScreen) {
        replaceCactusHistoryRoot(safeScreen);
        lastShownScreen = safeScreen;
        showScreenContent(safeScreen);
        isNavigatingWithBrowserBack = false;
        return;
    }

    lastShownScreen = requestedScreen;
    showScreenContent(requestedScreen);

    // Quand Retour atteint la vraie racine du dashboard, on remet aussitôt
    // l'entrée garde devant elle. Un nouvel appui reste donc dans l'accueil.
    if (
        requestedScreen === "dashboard" &&
        state.depth === 0 &&
        state.rootGuard !== true &&
        hasActiveCactusSpace()
    ) {
        history.pushState(createCactusRootState("dashboard", true), "", "#dashboard");
    }

    isNavigatingWithBrowserBack = false;
});

history.replaceState(
    {
        [CACTUS_NAV_STATE_KEY]: true,
        screen: "login",
        fromScreen: null,
        rootScreen: "login",
        depth: 0
    },
    "",
    "#login"
);
