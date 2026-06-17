function showScreen(screenName) {
    loginScreen.style.display = "none";
    pseudoScreen.style.display = "none";
    coupleScreen.style.display = "none";
    dashboardScreen.style.display = "none";
    rankingScreen.style.display = "none";
    rankingResultScreen.style.display = "none";
    settingsScreen.style.display = "none";
    rankingCompatibilityScreen.style.display = "none";
    historyScreen.style.display = "none";
    gardenScreen.style.display = "none";

    if (screenName === "login") {
        loginScreen.style.display = "block";
    }

    if (screenName === "pseudo") {
        pseudoScreen.style.display = "block";
    }

    if (screenName === "couple") {
        coupleScreen.style.display = "block";
    }

    if (screenName === "dashboard") {
        dashboardScreen.style.display = "block";
    }

    if (screenName === "ranking") {
        rankingScreen.style.display = "block";
    }

    if (screenName === "rankingResult") {
        rankingResultScreen.style.display = "block";
    }

    if (screenName === "settings") {
    settingsScreen.style.display = "block";
    }

    if (screenName === "rankingCompatibility") {
    rankingCompatibilityScreen.style.display = "block";
    }

    if (screenName === "history") {
    historyScreen.style.display = "block";
}
if (screenName === "garden") {
    gardenScreen.style.display = "block";
}


}
