function saveRankingAnswer(rankingId, answer) {
    const savedAnswers =
        JSON.parse(localStorage.getItem("rankingAnswers")) || [];

    savedAnswers.push({
        rankingId: rankingId,
        answer: answer,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem(
        "rankingAnswers",
        JSON.stringify(savedAnswers)
    );
}

function getRankingAnswers() {
    return JSON.parse(
        localStorage.getItem("rankingAnswers")
    ) || [];
}

function clearRankingAnswers() {
    localStorage.removeItem("rankingAnswers");
}

function saveRankingAnswerToFirebase(rankingId, answer) {
    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/rankingsAnswers/" +
            rankingId +
            "/" +
            currentUser.uid
        )
        .set({
            uid: currentUser.uid,
            pseudo: pseudo,
            answer: answer,
            createdAt: Date.now()
        });
}